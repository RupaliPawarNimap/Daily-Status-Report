 const {Role} =require("../models/index")


 const createRole =async(req,res)=>{
    try{
        let {role_name,description}=req.body
        let existRole =await Role.findOne({where:{role_name:role_name}})
        if(existRole){
            return res.status(400).json({msg:"Role Alredy Exist"})
        }
        let role =await Role.create({role_name:role_name,description:description?description:null});
        if(!role ||role.length==0){
            return res.status(400).json({msg:"Failed To Create Role"})
        }
        return res.status(201).json({msg:"Role Created Successfully",role:role})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Sever Error",err:err.message})
    }
 }
 const getAllRole =async(req,res)=>{
    try{
        let role =await Role.findAll();
        
        if(!role || role.length==0){
            return res.status(400).json({msg:"Role Not Exists"})
        }
        return res.status(200).json({msg:"Fetched All Roles",role:role})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
 }

 module.exports={createRole,getAllRole}