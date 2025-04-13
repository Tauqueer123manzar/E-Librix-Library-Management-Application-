const express=require("express");
const {register,verifyOTP,login,logout,getUser}=require("../controller/authController");
const {isAuthenticated}=require("../middleware/authMiddleware");
const router=express.Router();

router.post("/register",register);
router.post("/verify-otp",verifyOTP);
router.post("/login",login);
router.get("/logout",isAuthenticated,logout);
router.get("/getuser",isAuthenticated,getUser);
module.exports=router;