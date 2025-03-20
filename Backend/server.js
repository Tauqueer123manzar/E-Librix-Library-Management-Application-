const express=require("express");
const mongoose=require("mongoose");
const app=express();

const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

