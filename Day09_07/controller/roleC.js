const {Role} =require("../models/roleModel");

const createRole =async(req,res)=>{
    try{
        let role =await Role.create(req.body);
        console.log(role);
        if(!role){

            res.json({msg:"First add Role"})
        }
        else{
            res.json({msg:"Role Added succesfully"})
        }
             
    }
    catch(err){
        res.json({msg:"Something went wrong",err:err})
    }
}

const getRole =async(req,res)=>{
    try{
        let role =await Role.findAll();
        console.log(role);
        if(!role || role.length==0){
            return res.json({msg:"No Anny Role Exist"})
        }
           else{
            res.json({msg:"All Roles:",role})
        }
    }
       catch(err){
        res.json({msg:"Something went wrong",err:err})
    }
}
module.exports ={createRole,getRole}