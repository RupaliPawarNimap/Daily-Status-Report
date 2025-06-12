const User=require("../models/usermodel");
const bcrypt =require("bcrypt");
const json =require("jsonwebtoken")
exports.RegisterUser =async(req,res)=>{
    try{
        const {username,password,role} =req.body;
    const hashpds =await bcrypt.hash(password,10);
    let user =await User.create({username,password:hashpds,role})
    res.status(201).json({msg:"User Registed Succeesfully with name ",user:user})

    }
    catch(err){res.status(500).json({msg:"Something went wrong",err:err.message})}
     
}

exports.loginUser=async(req,res)=>{
    try{
const {username,password} =req.body;
const user =await User.findOne({username})
if(!user){
    return res.status(404).json("USer nt found")
}
const ismatch =await  bcrypt.compare(password,user.password);
if(!ismatch){
    return res.status(404).json("invalid Credentials")
}
const token =await json.sign({id:user._id,role:user.role},process.env.JWT_SECREAT,{expiresIn:"1hr"})
return res.status(200).json({msg:"USer Loggined succesfulyy",token:token})
    }
   catch(err){res.status(500).json({msg:"Something went wrong",err:err.message})}
}

exports.getRegister=async(req,res)=>{
    try{
        const user =await User.find();
        console.log(user)
        if(!user){
            res.status(400).json({msg:"Users Not found"})
        }
        return res.status(200).json({msg:"User Found Successsfully",user:user})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error"})

    }
}