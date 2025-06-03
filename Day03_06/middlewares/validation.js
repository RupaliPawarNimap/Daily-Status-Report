const {User} =require("../models/userModel");


exports.validation =async(req,res,next)=>{
  try{
    let {email} =req.body
let findEmail =await User.findOne({where:{email}})
if(!findEmail){
    next()
}
else{
    return res.status(400).json({msg:"Email Already Exist"})
}
  }
  catch(err){
    res.status(500).json({msg:"Something went wrong",err:err.message,name:err.name})
  }
}
