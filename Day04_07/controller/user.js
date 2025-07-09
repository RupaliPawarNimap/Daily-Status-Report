const { where } = require("sequelize");
const {User} =require("../model/userModel")


const CreteUSer =async(req,res)=>{
    try{
        let user =await User.create(req.body);
        if(!user){
            res.json({msg:"Provide All the Information"})
        }
        else{
            res.json({msg:"User Created Successfully",user:user})
        }
    }
    catch(err){
        res.json({msg:"Something Went Wrong",err:err.message})
    }

}


const getUser =async(req,res)=>{
    try{
        let user =await User.findAll(req.body);
        if(!user || user.length==0){
            res.json({msg:"No user Exist"})
        }
        else{
            res.json({msg:"User Fetched Successfully",user:user})
        }
    }
    catch(err){
        res.json({msg:"Something Went Wrong",err:err.message})
    }

}

const getOneUser =async(req,res)=>{
    try{
       const  id =req.params.id
       console.log(id);
        let user =await User.findOne({where:{id}});
        if(!user | user.length ==0){
            res.json({msg:"No user Exist"})
        }
        else{
            res.json({msg:"User Fetched Successfully",user:user})
        }
    }
    catch(err){
        res.json({msg:"Something Went Wrong",err:err.message})
    }

}

const updateUser =async(req,res)=>{
    try{
       const  id =req.params.id
        let user =await  User.findOne({where:{id}});
        if(!user){
            res.json({msg:"No user Exist"})
        }
        else{
            let updateUSer =await user.update(req.body)
            res.json({msg:"User Updated Successfully",user:updateUSer})
        }
    }
    catch(err){
        res.json({msg:"Something Went Wrong",err:err.message})
    }

}


const deletUser  =async(req,res)=>{
    try{
       const  id =req.params.id
        let user =await  User.findOne({where:{id}});
        if(!user){
            res.json({msg:"No user Exist"})
        }
        else{
            let deleteUser =await user.destroy(req.body)
            res.json({msg:"User deleted Successfully",user:deleteUser})
        }
    }
    catch(err){
        res.json({msg:"Something Went Wrong",err:err.message})
    }

}

module.exports ={deletUser,updateUser,getOneUser,getUser,CreteUSer}