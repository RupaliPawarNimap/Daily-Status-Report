const jwt =require("jsonwebtoken")
require("dotenv").config()
const verifyToken =async(req,res,next)=>{
    try{

            let authheader =req.headers.authorization;


    if(!authheader|| !authheader.startsWith("Bearer")){
        res.status(400).json({msg:"Token not Found"})
    }

    let token =await authheader.split(" ")[1];
     
let decode =await jwt.verify(token,process.env.JWT_SECREAT);
if(!decode){
    res.status(400).json({msg:"Token not match"})
}

req.user =decode;
next();


    }
    catch(err){
        res.status(500).json({msg:"Something went wrong",err:err.message})
    }
 

}

module.exports ={verifyToken}