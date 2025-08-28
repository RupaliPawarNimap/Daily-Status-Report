const User =require("../models/user")
const Role=require("../models/role");
const user = require("../models/user");

const createUser =async(req,res)=>{
    try{
        const {first_name,last_name,email,password,role} =req.body
        let r =await Role.findOne({role_name:role});
        if(!r){
            return res.status(404).json({msg:"Role Not Found"})
        }
        if(!first_name||!last_name||!email||!password){
            return res.status(400).json({msg:"All Fields Are Required"});
        }
let user =await User.create({first_name,last_name,email,password,role:r.id});
if(!user){
    return res.status(400).json({msg:"Failed To creeate user"})
}
return res.status(201).json({msg:"User Created Successfully",user:user  })
    }
    catch(err){
return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

const getAllUSer =async(req,res)=>{
    try{
        let user=await User.find();
        return res.status(200).json({msg:"Fetched All USers",user:user})
    }
        catch(err){
return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

const updateUser=async(req,res)=>{
    try
    {
        let {id} =req.params
        console.log(id);
         if(!id){
            return res.status(404).json({msg:"Plz Provide the ID"})
        }
        let user =await User.findById(id);
        // let {first_name,last_name,email,password}=req.body;
         const { first_name, last_name, email, password } = req.body;

    if (first_name) user.first_name = first_name;
    if (last_name) user.last_name = last_name;
    if (email) user.email = email;
    if (password) user.password = password;
        await user.save();
        return res.status(200).json({msg:"User Updatd",user:user})
    }

          catch(err){
return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

const deleteUser=async(req,res)=>{
    try{
        let id =req.params.id
        if(!id){
            return res.status(404).json({msg:"Plz Provide the ID"})
        }
        let user =await User.findByIdAndDelete(id);
        return res.status(200).json({msg:"User Deleted ",user:user})
        
    }      catch(err){
return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

module.exports={createUser,getAllUSer,updateUser,deleteUser}