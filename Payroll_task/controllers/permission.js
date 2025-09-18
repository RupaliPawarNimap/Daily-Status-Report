const {Permission} =require("../models/index");

const createPermission=async(req,res)=>{
    try{
        let {action_name,description,base_url,path,method} =req.body
        // console.log(action_name,description,base_url,path,method);

        if(!action_name|| !base_url|| !path || !method){
            return res.status(400).json({msg:"All fields are required"})
        }
        let permission=await Permission.create({action_name,base_url,path,method,description});
        if(!permission){
            return res.status(400).json({msg:"Failed To create Peermission"})
        }
return res.status(201).json({msg:"Permission Added Successfully",permission:permission})
    }
    catch(err){
        return res.status(500).json({msg:" Internal Server Error",err:err.message})
    }
}

const getAllPermission=async(req,res)=>{
try{
    let permission =await Permission.findAll();
    if(!permission || permission.length==0){
        return res.status(400).json({msg:"Failed To get The Permission"})
    }
    return res.status(200).json({msg:"Fetched All Permissions",permission:permission})
}
catch(err){
        return res.status(500).json({msg:" Internal Server Error",err:err.message})
    }
}

module.exports={createPermission,getAllPermission}