const express=require("express");
const {register,verifyOTP,login}=require("../controller/authController");

const router=express.Router();

router.post("/register",register);
router.post("/verify-otp",verifyOTP);
router.post("/login",login);
module.exports=router;