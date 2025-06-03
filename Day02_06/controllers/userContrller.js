const { sequelize } = require("../config/db");
const {User} =require("../models/userModel")
const {QueryTypes, where} =require("sequelize")

exports.createUser =async(req,res)=>{
    try{
        let user =await User.create(req.body);
        if(user.length==0){
           return res.status(400).json("Please Enter the valid Details")
        }
        res.status(201).json({msg:"user Created Successfully",user:user})

    }
     catch(err){
       return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getUser =async(req,res)=>{
    try{ 
        let user =await User.sequelize.query('SELECT * FROM `users`',{type:QueryTypes.select})
        if(user.length==0){
           return res.status(400).json("no user Exist")
        }
        res.status(200).json({msg:"user found Successfully",user:user})

    }
     catch(err){
       return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getUserById =async(req,res)=>{
    try{
        let user =await User.findByPk(req.params.id);
        console.log(user);

        if( !user ||user.id==null){
           return res.status(400).json("no user Exist")
        }
       
       return res.status(201).json({msg:"user found Successfully",user:user})

    }
     catch(err){
       return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}
exports.deleteUser =async(req,res)=>{
    try{
        let user =await User.findByPk(req.params.id);

        if(!user||user.length==0){
           return res.status(400).json("no user Exist")
        }
        let deleteUSer =await user.destroy()
        res.status(201).json({msg:"user Deleted Successfully"})

    }
    catch(err){
       return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.updateUser =async(req,res)=>{
    try{
        let user =await User.findByPk(req.params.id);

        if(user.length==0){
           return res.status(400).json("no user Exist")
        }
        let updateUSer =await user.update(req.body)
        return res.status(201).json({msg:"user Updated Successfully",user:updateUSer})

    }
    catch(err){
       return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getByEmail = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { email: req.params.email }
    });

    if (user.length === 0) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    return res.status(200).json({ msg: "User exists with this email", user });

  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};
