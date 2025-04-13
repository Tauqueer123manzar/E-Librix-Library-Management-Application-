const ErrorHandler=require("../middleware/ErrorHandler");
const catchasyncErrors=require("../middleware/catchAsyncErrors");
const User =require("../models/userModel");
const sendVerificationCode=require("../utils/sendVerificationCode");
const bcrypt=require("bcrypt");
const crypto=require("crypto");
const sendToken=require("../utils/sendToken");
const sendEmail=require("../utils/sendEmail");
const generateForgotPasswordEmailTemplate=require("../utils/generateForgotPasswordEmailTemplate");

exports.register=catchasyncErrors(async(req,res,next)=>{
    try{
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return next(new ErrorHandler("Please Enter All Fields",400));
        }
        const isRegistered=await User.findOne({email,accountVerified:true});
        if(isRegistered){
            return next(new ErrorHandler("User Already Registered",400));
        };
        const registerationAttemptByUser=await User.find({
            email,
            accountVerified:false
        });
        if(registerationAttemptByUser.length>20){
            return next(new ErrorHandler("Maximum Registration Attempts Reached",400));
        };
        if(password.length<8 || password.length>16){
            return next(new ErrorHandler("Password should be between 8 to 16 characters",400));
        };
        const hashedpassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,
            email,
            password:hashedpassword,
        });
        const verificationCode=await user.generateVerificationCode();
        await user.save();
        sendVerificationCode(verificationCode,email,res);
    }catch(error){
        return next(new ErrorHandler(error.message,400));
    }  
});

// ========================== verifyOtp ========================================
exports.verifyOTP=catchasyncErrors(async(req,res,next)=>{
    const{email,otp}=req.body;
    if(!email || !otp){
        return next(new ErrorHandler("Email or otp is missing",400));
    };
    try {
        const userAllEntries=await User.find({
            email,
            accountVerified:false
        }).sort({createdAt:-1});
        if(!userAllEntries){
            return next(new ErrorHandler("User Not Found",404));
        };
        let user;
        if(userAllEntries.length>1){
            user=userAllEntries[0];
            await User.deleteMany({
               _id:{$ne:user._id},
               email,
               accountVerified:false 
            });
        }else{
            user=userAllEntries[0];
        };
        if(user.verificationCode!==Number(otp)){
            return next(new ErrorHandler("Invalid OTP",400));
        };
        const currentTime=new Date();
        const verificationCodeExpire=new Date(
            user.verificationCodeExpire
        ).
        getTime();
        if(currentTime>verificationCodeExpire){
            return next(new ErrorHandler("OTP Expired",400));
        };

        user.accountVerified=true;
        user.verificationCode=null;
        user.verificationCodeExpire=null;
        await user.save({validateModifiedOnly:true});

        sendToken(user,201,res,"Account Verified Successfully");
    } catch (error) {
        return next(new ErrorHandler("Internal Server Error",500));
    }
});


// ================================== login =============================
exports.login=catchasyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email || !password){
        return next(new ErrorHandler("Please Enter All Fields",400));
    }
    const user=await User.findOne({email,accountVerified:true}).select("+password");
    if(!user){
        return next(new ErrorHandler("User Not Found",400));
    }
    const isPasswordMatched=await bcrypt.compare(password,user.password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password",400));
    }
    if(!user.accountVerified){
        return next(new ErrorHandler("Please Verify Your Account",400));
    }
    sendToken(user,200,res,"Login Successfully");
});

// ================================== logout ==========================
exports.logout=catchasyncErrors(async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        message:"Logged Out Successfully",
    });
});

// ======================================== getUser =========================
exports.getUser=catchasyncErrors(async(req,res,next)=>{
   const user=req.user;
    if(!user){
         return next(new ErrorHandler("User Not Found",404));
    }
    res.status(200).json({
        success:true,
        user,
    });
});

// ================================== forgotPassword ==========================
exports.forgotPassword=catchasyncErrors(async(req,res,next)=>{
    const{email}=req.body;
    if(!email){
        return next(new ErrorHandler("Please Enter Email",400));
    }
    const user=await User.findOne({email});
    if(!user){
        return next(new ErrorHandler("User Not Found",400));
    }
    const resetToken=await user.generateResetPasswordToken();
    await user.save({validateBeforeSave:false});
    const resetPasswordUrl=`${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;
    const message=generateForgotPasswordEmailTemplate(resetPasswordUrl);
    try {
        await sendEmail({
            email:user.email,
            subject:"Library Management System Password Recovery",
            message,
        });
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`,
        });
        
    } catch (error) {
        user.resetPasswordToken=undefined;
        user.resetPasswordTokenExpire=undefined;
        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message,500));
    }
});

// ==================================== resetPassword ==========================
exports.resetPassword=catchasyncErrors(async(req,res,next)=>{
    const resetToken=req.params.token;
    const hashedToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    const user=await User.findOne({
        resetPasswordToken:hashedToken,
        resetPasswordTokenExpire:{$gt:Date.now()},
    });
    if(!user){
        return next(new ErrorHandler("Reset Password Token is Invalid or Expired",400));
    }
});

// ===================================== updatePassword ==========================
exports.updatePassword=catchasyncErrors(async(req,res,next)=>{
    const user=req.user;
    const {oldPassword,newPassword}=req.body;
    if(!oldPassword || !newPassword){
        return next(new ErrorHandler("Please Enter All Fields",400));
    }
    if(newPassword.length<8 || newPassword.length>16){
        return next(new ErrorHandler("Password should be between 8 to 16 characters",400));
    }
    const isPasswordMatched=await bcrypt.compare(oldPassword,user.password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Old Password is Incorrect",400));
    }
    const hashedpassword=await bcrypt.hash(newPassword,10);
    user.password=hashedpassword;
    await user.save({validateBeforeSave:false});
    sendToken(user,200,res,"Password Updated Successfully");
});



