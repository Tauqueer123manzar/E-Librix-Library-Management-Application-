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
  avatar:{
    public_id:String,
    url:String
  },
  verificationCode:Number,
  verificationCodeExpire:Date,
  resetPasswordToken:String,
  resetPasswordTokenExpire:Date
},{timestamps:true});

userSchema.methods.generateVerificationCode=function(){
    function generateRandomFiveDigitNumber(){
        const firstDigit=Math.floor(Math.random()*9)+1;
        const randomDigit=Math.floor(Math.random()*10000).toString().padStart(4,0);
        return parseInt(firstDigit+randomDigit);
    }
    const verificationCode=generateRandomFiveDigitNumber()
        this.verificationCode=verificationCode;
        this.verificationCodeExpire=Date.now()+ 15 * 60 * 1000;
        return verificationCode;
}

const User=mongoose.model("User",userSchema);

module.exports=User;

