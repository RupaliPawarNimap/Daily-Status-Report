const { json } = require("body-parser");
const jwt =require("jsonwebtoken")
require("dotenv").config();



const verifyToken =async(req,res,next)=>{
    try{
 let token =req.headers.authorization || req.header.authorization || req.header.authorization
    if(!token || !token.startsWith("Bearer")){
        return res.status(404).json({msg:"Token Not Found"})
    }
    else val =token.split(" ")[1];
    let decode =await jwt.verify(val,process.env.SCREAT_KEY);
    if(!decode){
        return res.status(400),json({msg:"Unauthorized"})
    }
    req.user =decode;
    console.log(req.user);
    next()
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
    
    

}

module.exports ={verifyToken}