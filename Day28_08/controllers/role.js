const Role =require("../models/role")

const createRole =async(req,res)=>{
    try{
        const {role_name,description} =req.body
        console.log(role_name);
        let role =await Role.create({role_name,description});
        if(!role){
            return res.status(400).json({msg:"Failed To create Role"})
        }
        return res.status(201).json({msg:"Created Role",role:role})
    }catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

const getAll=async(req,res)=>{
    try{
        let role =await Role.find();
        return res.status(200).json({msg:"Fetched All",role:role})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

module.exports ={createRole,getAll}