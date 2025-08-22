const jwt =require("jsonwebtoken");
require("dotenv").config();


const generateToken =async(user)=>{
    
        return jwt.sign({userID:user.id},process.env.JWT_SECREAT,{expiresIn:"1hr"})
    
}

module.exports ={generateToken}