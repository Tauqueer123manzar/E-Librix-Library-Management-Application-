const ErrorHandler=require("../middleware/errorMiddlewares");
const catchasyncErrors=require("../middleware/catchAsyncErrors");
const {User} =require("../models/userModel");
const sendVerificationCode=require("../utils/sendVerificationCode");
const bcrypt=require("bcrypt");
const crypto=require("crypto");

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
        if(registerationAttemptByUser.length>5){
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

