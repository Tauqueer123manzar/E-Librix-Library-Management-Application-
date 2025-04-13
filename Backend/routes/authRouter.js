const express=require("express");
const {register,verifyOTP}=require("../controller/authController");

const router=express.Router();

router.post("/register",register);
router.post("/verify-otp",verifyOTP);
module.exports=router;