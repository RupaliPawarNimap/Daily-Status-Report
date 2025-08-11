const { Permission } = require("../models");

const createPermission =async(req,res)=>{
    try{
        let {action,method,baseUrl,path} =req.body;
        if(!action||!method||!baseUrl||!path){
            return res.status(400).json({msg:"All Fields Are Required"})
        }
        let permission =await Permission.create({action,method:method,baseUrl:baseUrl,path:path})
        return res.status(201).json({msg:"Permission Added",permission})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error"})
    }
}

const getAllPermission =async(req,res)=>{
    try{
        let permission =await Permission.findAll()
        if(!permission || permission.length==0){
            return res.status(404).json({msg:"No Permissions "})
        }
        return res.status(200).json({msg:"Permision Fetched Successfully",permission})
    }
        catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

module.exports ={getAllPermission,createPermission}