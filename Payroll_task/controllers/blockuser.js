const {BlockedUsers,User} =require("../models/index")

const blockUser =async(req,res)=>{
    try{
        let {blocked_user} =req.body
        let user =await User.findByPk(blocked_user)
        if(!user){
            return res.status(404).json({msg:"Id is Invalid"})
        }
         
        let blockuser =await BlockedUsers.create({
            blocked_user:user.id,
             blocked_by:req.user.id
        })
        if(!blockuser){
            return res.status(400).json({msg:"Failed To Block The User"})
        }
        return res.status(200).json({msg:"User Blocked Successfully",blockuser:blockuser})

        
    }
     catch(err){
    return res.status(500).json({msg:"Internal Server Error",err:err.message})
  }
}

const getAllBlockUser =async(req,res)=>{
    try{
        let user =await BlockedUsers.findAll({
            include:[{
                model:User,
                as:"Blocked",
                attributes:["first_name","last_name"]
            },{
                model:User,
                as:"BlockedBy",
                attributes:["first_name","last_name"]
            }]
        })
        if(!user || user.length==0){
            return res.status(400).json({msg:"No Any Users are Blocked"})
        }
                    return res.status(400).json({msg:" Fetched The Blocked User Data",BlockUser:user})

    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}
module.exports={
    blockUser,getAllBlockUser
}