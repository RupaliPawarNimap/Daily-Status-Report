const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");
const dotenv =require('dotenv').config()
const {User} =require("../models/index")

 

exports.verifyToken =async(req,res,next)=>{
    try{
        let header =req.headers.authorization||req.headers.Authorization;
        if(!header || !header.startsWith("Bearer")){
            return res.status(404).json({msg:"Failed To Found Token"})
        }
        let token  =header.split(" ")[1]
        let decode =await jwt.verify(token,process.env.JWT_SECREAT);
        if(!decode){
            return res.status(400).json({msg:"Failed To match Token"})
        }
        else{
            req.user =decode
            next();
        }

    }
      catch(err){
        return res.status(500).json({msg:"Something Went Wrong",err:err.message})
    }
}

