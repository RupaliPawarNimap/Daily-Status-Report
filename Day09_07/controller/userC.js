const {Role,User } =require("../models/index");
const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken")
require("dotenv").config()


const registerUser =async(req,res)=>{
    try{
        let user =await User.create(req.body);
        if(!user || user.length==0){
            res.json({msg:"Add The User Details"})
        }
        else{
            res.json({msg:"User Added Successfully",user:user})
        }
    }
    catch(err){
        res.json({msg:"Something went wrong",err:err.message})
    }
}
const loginUser =async(req,res)=>{
    try{
        let user =await User.findOne({where:{email:email}});
        if(!user || user.length==0){
            res.json({msg:"User not exist Register First"})
        }
        let password =await bcrypt.compare(user.password)
        if(!password){
            res.json({msg:"password in incorect"})
        }
        let token =jwt.sign({name:user.name,email:user.email,role:user.role},process.env.SECREAT_KEY,{expiresIn:"1hr"})
        if(!token){
            res.json({msg:"Failed To Create Token"})
        }
        else{
            res.json({msg:"User Logined Successfully",token:token})
        }
    }
    catch(err){
        res.json({msg:"Something Went Wrong",err:err})
    }
}

const getAllUser =async(req,res)=>{
    try{
        let user =await User.findAll();
        if(!user|| user.length==0){
            return res.json({msg:"No any user Exist"})
        }
        else{
            return res.json({msg:"USer Fetched Succesffuly",user})
        }
    }
      catch(err){
        res.json({msg:"Something Went Wrong",err:err})
    }
}

const updateUser =async(req,res)=>{
    try{
        let user=await User.findOne({where:{id:id}});
        if(!user|| user.length==0){
            return res.json({msg:"User Not Exist"})
        }
        let updateuser =await user.update(req.body);
        if(!updateUser || updateUser.length==0){
              return res.json({msg:"Failed To update"})

        }
        else{
             return res.json({msg:"USer updated Succesffuly",updateuser})
        }
    }
        catch(err){
        res.json({msg:"Something Went Wrong",err:err})
    }
}

const deleteUSer =async(req,res)=>{
    try{
        let user=await User.findOne({where:{id:id}});
        if(!user|| user.length==0){
            return res.json({msg:"User Not Exist"})
        }
        let updateuser =await user.destroy();
        if(!updateUser || updateUser.length==0){
              return res.json({msg:"Failed To delete"})

        }
        else{
             return res.json({msg:"USer deleted Succesffuly",updateuser})
        }
    }
        catch(err){
        res.json({msg:"Something Went Wrong",err:err})
    }
}

module.exports ={getAllUser,registerUser,loginUser,updateUser,deleteUSer}

