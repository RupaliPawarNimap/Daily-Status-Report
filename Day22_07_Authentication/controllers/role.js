const {Role} =require("../models/index")


const createRole =async(req,res)=>{
    try{
        const {name} =req.body;
        if(!name){
            return res.status(400).json({msg:"Plz provide the role name"})
        }
        let role =await Role.create({name:name});
        if(!role){
            return res.status(400).json({msg:"Failed to create Role"})
        }
        else{
            return res.status(201).json({msg:"Role created successfully",role:role})
        }
    }
    catch(err){
        return res.status(500).json({msg:"Something went wrong",err:err.message})
    }
}

const getRole =async(req,res)=>{
    try{
        let role =await Role.findAll();
        if(!role || role.length==0){
            return res.status(400).json({msg:"No Roles are Availble"})
        }
        return res.status(200).json({msg:"Role Featched Successfully",role:role})
    }
        catch(err){
        return res.status(500).json({msg:"Something went wrong",err:err.message})
    }
}

module.exports ={createRole,getRole}