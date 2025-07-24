const {Permission} =require("../models/index");
 
const createPermission =async(req,res)=>{
    try{
        console.log(req.baseurl,req.path,req.route);
        const {action,description,baseUrl,path,method} =req.body;
        if(!action || !description || !baseUrl || !path || !method){
            return res.status(400).json({msg:"Plz Provide all the fields"})
        }
        let permission =await Permission.create({action,description,baseUrl,path,method});
        if(!permission || permission.length==0){
            return res.status(400).json({msg:"Failed to create the Permission"})
        }
        return res.status(201).json({msg:"Permission Added Successfully"})
    }
    catch(err){
        return res.status(500).json({msg:"Something went wrong",err:err.message})
    }
}

const getPermission =async(req,res)=>{
    try{
        let permission =await Permission.findAll();
        if(!permission || permission.length==0){
            return res.status(400).json({msg:"Permissions Not Available"})
        }
        return res.status(200).json({msg:"Permission fethed Successfully",permission:permission})

    }
        catch(err){
        return res.status(500).json({msg:"Something went wrong",err:err.message})
    }
}

module.exports ={createPermission,getPermission}