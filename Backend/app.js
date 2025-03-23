const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const connectDB=require("./database/db");
const {errorMiddleware}=require("./middleware/errorMiddlewares");

dotenv.config({path:"./config/config.env"});

const app=express();

const PORT=process.env.PORT || 5000;

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectDB();

app.use(errorMiddleware);

module.exports=app;


