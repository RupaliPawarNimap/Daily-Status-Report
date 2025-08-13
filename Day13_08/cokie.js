const jwt =require("jsonwebtoken");
const express=require("express")
const app =express();
const cookieparser =require("cookie-parser")
app.use(cookieparser());
app.use(express.json())
app.post("/set-cookie",async(req,res)=>{
    let {username,password,email} = req.body
    let token =await jwt.sign({username,email},"SECREAT",{expiresIn:"1hr"});
    if(!token){
        return res.json({msg:"Failed To cReated Token"})
    }
    res.cookie("email",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict"
        
    })
    return res.json({msg:"Cokkie set Successfully"})

})

app.get("/get-cookie",(req,res)=>{
    let email=req.cookies.email;
    console.log(email);
    
    if(email){
        return res.json({msg:"Cookie exists"})
    }
    else{
        return res.json({msg:"Cookie not Found"})
    }


})

app.delete("/delete",(req,res)=>{
    res.clearCookie("email")
})
 
app.listen(3000,()=>{
    console.log("Working");
})