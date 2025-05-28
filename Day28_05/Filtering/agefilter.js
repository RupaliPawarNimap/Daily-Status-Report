const { Op } = require("sequelize")
const User =require("../models/employeemodel")
exports.filterbyAge =async(req,res)=>{
    try{
      
        let user =await User.findAll({where:{ age:{[Op.gt]:req.params.age}}})
        if(user.length!==0){
           return res.status(200).json({msg:"USers Found",user:user})
        }
        else{
            return  res.status(200).json({msg:"USers not Found"})
        }

    }
    catch(err){
        res.json({msg:"Something Went Wrong",err:err.message})
    }
}


exports.filterMethod=async(req,res)=>{
    try{
        let {name,age,salaryMin,salaryMax,department} =req.query;

        let whereCondition =({
            ...(name&& {name:{[Op.like] :`%${name}`}}),
            ...(age&&{age:age}),
            ...(department&&{department:department}),
            ...(salaryMin&& salaryMax&&{salary:{[Op.between]:[salaryMin,salaryMax]}})
        })

        let user =await User.findAll({where:whereCondition})
        if(user.length===0){
            return res.status(400).json({ msg: "Users not found" });
        }
        return res.status(200).json({ msg: "Users found", user });


    }
       catch(err){
        res.json({msg:"Something Went Wrong",err:err.message})
    }
}