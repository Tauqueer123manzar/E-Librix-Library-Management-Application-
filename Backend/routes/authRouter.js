const express=require("express");
const {register,verifyOTP,login,logout}=require("../controller/authController");

const router=express.Router();

router.post("/register",register);
router.post("/verify-otp",verifyOTP);
router.post("/login",login);
router.get("/logout",logout);
module.exports=router;