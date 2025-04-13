const sendToken=(user,statusCode,res,message)=>{
    res.status(statusCode).cookie("token",token,{
      expires:new Date(Date.now())
    })
}