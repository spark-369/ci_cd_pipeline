const express=require("express")
const app=express()
app.post("/auth/login",(req,res)=>{
    res.json({
        success:true,
        message:"login success",
        data:[1,2,3]
    })
})
app.listen(3000)