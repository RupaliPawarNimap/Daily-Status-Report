const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");
const {User} =require("../models/index");
const { where,Op } = require("sequelize");
const dotenv =require("dotenv").config()


exports.loginUser =async(req,res)=>{

   
        const {email,password} =req.body

        let user =await User.findOne({where:{email:email}}) ;
        if(!user){
            return res.status(401).json("First Do Registation")
        }
        const compare =await bcrypt.compare(password,user.password);
        if(!compare){
            return res.status(400).json("Password is Incorrect")
        }
        let token  =await jwt.sign({ role_id:user.role_id,name:user.name,id:user.id},process.env.JWT_SECREAT,{expiresIn:"1hr"});
        if(!token){
            return res.status(500).json({msg:"Failed To token Creation"})
          
        }
        else{
             return res.status(200).json({msg:"Login Successfully",token:token})
        }
    

}