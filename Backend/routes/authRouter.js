const express=require("express");
const {register,verifyOTP,login,logout,getUser,forgotPassword,resetPassword,updatePassword}=require("../controller/authController");
const {isAuthenticated}=require("../middleware/authMiddleware");
const router=express.Router();

router.post("/register",register);
router.post("/verify-otp",verifyOTP);
router.post("/login",login);
router.get("/logout",isAuthenticated,logout);
router.get("/getuser",isAuthenticated,getUser);
router.post("/forgot/password",forgotPassword);
router.post("/reset/password",resetPassword);
router.put("/update/password",isAuthenticated,updatePassword);
module.exports=router;