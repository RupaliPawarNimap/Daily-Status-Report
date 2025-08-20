const User=require("../models/user");


const createUser =async(req,res)=>{
    try{
let {name,email} =req.body;
if(!name|| !email){
    res.status(400).json({msg:"All Field Are Required"})
}
let user =await User.create({name,email});
res.status(201).json(user)
    }
    catch(err){
        res.status(500).json({msg:"Internal Server Error",err:err.message})

    }
}
// const getUSer =async(r)

module.exports ={createUser};