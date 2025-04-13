const catchAsyncErrors=require("./catchAsyncErrors");
const ErrorHandler=require("./ErrorHandler");
const User=require("../models/userModel");
const jwt=require("jsonwebtoken");

// This middleware checks if the user is authenticated by verifying the JWT token
exports.isAuthenticated=catchAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new ErrorHandler("user is not Authenticated",401));
    };
    const decodedData=jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user=await User.findById(decodedData.id);
    next();
});