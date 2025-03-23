const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    role:{
        type:String,
        default:"User",
        enum:["User","Admin"]
    },
    accountVerified:{
        type:Boolean,
        default:false
    },
    borrowedBooks:[
    {
        bookId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Borrow"
        },
        returned:{
            type:Boolean,
            default:false
        },
        bookTitle:String,
        borrowedDate:Date,
        dueDate:Date,
    },
  ],
  verificationCode:Number,
  verificationCodeExpire:Date,
  resetPasswordToken:String,
  resetPasswordTokenExpire:Date
},{timestamps:true});

const User=mongoose.model("User",userSchema);

module.exports=User;

