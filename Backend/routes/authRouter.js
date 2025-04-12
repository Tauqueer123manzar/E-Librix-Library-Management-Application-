const express=require("express");
const {register}=require("../controller/authController");

const router=express.Router();

router.post("/register",register);

module.exports=router;