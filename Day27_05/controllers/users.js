// const { sequelize } = require("../config/db");
const {Op, where} =require("sequelize")
const User =require("../models/userModel")
 


exports.filteruser = async (req, res) => {
  const { name, email } = req.query;
  console.log("Query Params =>", name, email);

  try {
    let whereCondition = {
      ...(name && { name: { [Op.like]: `%${name}%` } }),
      ...(email && { email: { [Op.like]: `%${email}%` } })
    };

    console.log("Filter Condition =>", whereCondition);

    let filterUser = await User.findAll({ where: whereCondition });

    if (!filterUser || filterUser.length === 0) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    return res.status(200).json({ msg: "Filtered Users", users: filterUser });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error", err: err.message });
  }
};

exports.filterByAge =async(req,res)=>{
    try{

        
        let user =await User.findAll({where:{
            age:{[Op.lt]:20}
        }})
         if(user.length==0){
           return res.json("Age not found")
         }
          else{
        return res.json({msg:"USers found",user:user})
    }
       
    
    }
    catch(err){
        res.send("Failed to finds")
    }
    
}
 exports.createUser =async(req,res)=>{
    try{

         let user =await User.create(req.body);
         
    if(!user){
        res.status(400).json("Failed to create user")
    }
    else{
         res.status(201).json({msg:"USer Created Successfully",user:user})
    }

    }
    catch(err){
        res.status(500).json({msg:"Internal server Error",err:err.message})
    }
    
    

}


exports.getUser = async(req,res)=>{
    try{
        let user =await User.findAll();
        //  console.log(user);
        if(!user || user.length==0){
            res.status(400).json("There is No any user")
        }
        else{
            res.status(200).json({msg:"Users found",user:user})
        }
    }
    catch(err){
        res.status(500).json({msg:"Internal server Error",err:err.message})
    }
}

exports.getUserById =async(req,res)=>{
    try{
        let user =await User.findByPk(req.params.id);
        if(!user|| user.length==0){
           return res.status(400).json({msg:"User not Exist"})
        }
        else{
            return res.status(200).json({msg:"User Found",user:user})
        }

    }
    catch(err){
        res.status(500).json({msg:"Internal server Error",err:err.message})
    }
}
exports.updateUser =async(req,res)=>{
    try{

        let user =await User.findByPk(req.params.id);
         if(!user){
           return res.status(400).json({msg:"User not Exist"})
        }
        else{
            let updateUser =await user.update(req.body);
            res.status(200).json({msg:"Updated user",updated:updateUser})
        }

    }
    catch(err){
        res.status(500).json({msg:"Internal server Error",err:err.message})
    }
}


exports.deleteUser =async(req,res)=>{
    try{
         let user =await User.findByPk(req.params.id);
         if(!user){
           return res.status(400).json({msg:"User not Exist"})
        }
        else{
            let deleteUSer =await user.destroy();
            res.status(200).json({msg:"Deleted USer",deleted:deleteUSer})
        }


    }
      catch(err){
        res.status(500).json({msg:"Internal server Error",err:err.message})
    }
    
}

exports.deleteAll =async(req,res)=>{
    try{
        let users  =await User.destroy({where:{}});
        if(!users||users.length==0){
          return  res.status(400).json("USer Not Found")
        }
        else {
            return res.status(200).json("All Users Deleted Successfully")
        }
    }
    catch(err){
        res.status(500).json({msg:"Internal Server Error"})
    }
}

 