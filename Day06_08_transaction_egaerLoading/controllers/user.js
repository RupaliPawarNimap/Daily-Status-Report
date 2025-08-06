// const { sequelize } = require("../config/db");
const {User,Course, Entrollment} =require("../models/index");
// const t =sequelize.transaction();


const createUser=async(req,res)=>{
    try{
        let {name,email} =req.body;
        console.log(email,name);
        let user =await User.create({name,email});
        if(!user){
            return res.status(400).json({msg:"Failed To create User"})
        }
        return res.status(201).json({msg:"User Created Successfully",user})

    }
    catch(err){
return res.status(500).json({msg:"Internal Server error",err:err.message})
    }
}

const getuser =async(req,res)=>{
    try{
           const user= await User.findAll({
      include: {
        model: Course,
        attributes: ["c_name"],
    
      }
    });
        if(user.length==0){
            return res.status(400).json({msg:"Users not Availabe"})
        }
         return res.status(200).json({msg:"User fetched Successfully",user})


    }
    catch(err){
return res.status(500).json({msg:"Internal Server error",err:err.message})
    }
}
module.exports ={getuser,createUser}