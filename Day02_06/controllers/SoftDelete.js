const {User} =require("../models/userModel")
const {Op} =require("sequelize")


exports.deleteUser =async(req,res)=>{
    try{
        let user =await User.findByPk(req.params.id);
        if(!user||user.length==0){
            return res.json("User not esist")
        }
        let deletedUser=await user.destroy()
        return res.status(200).json({msg:"usser esxist",deletedUser:deletedUser})

    }catch(err){
        res.status(500).json({msg:"Internal Sserver Error",err:err.message})
    }
}
exports.activeuser =async(req,res)=>{
      try{
       let user =await User.findAll()
       if(user.length==0){
        return res.send("not exist")
       }
        
        return res.status(200).json({msg:"usser esxist",user:user})

    }catch(err){
        res.status(500).json({msg:"Internal Sserver Error",err:err.message})
    }

}

exports.includeDeleted =async(req,res)=>{
      try{
       let user =await User.findAll({paranoid:false})
       if(user.length==0){
        return res.send("not exist")
       }
        
        return res.status(200).json({msg:"usser esxist",user:user})

    }catch(err){
        res.status(500).json({msg:"Internal Sserver Error",err:err.message})
    }

}
exports.deleted=async(req,res)=>{
       try{
       let user =await User.findAll({where:{deletedAt:{[Op.not]:null}}})
       if(user.length==0){
        return res.send("not exist")
       }
        
        return res.status(200).json({msg:"usser esxist",user:user})

    }catch(err){
        res.status(500).json({msg:"Internal Sserver Error",err:err.message})
    }
    
}

exports.permanent =async(req,res)=>{
 try{
        let user =await User.findByPk(req.params.id);
        if(user.length==0){
            return res.json("User not esist")
        }
        let deletedUser=await user.destroy({force:true})
        return res.status(200).json({msg:"Permenanetly deleted",user:user})

    }catch(err){
        res.status(500).json({msg:"Internal Sserver Error",err:err.message})
    }
    
}

exports.restoreUser =async(req,res)=>{
     try{
        let user =await User.restore({where:req.params.id});
        if(user.length==0){
            return res.json("User not esist")
        }
        let deletedUser=await user.destroy()
        return res.status(200).json({msg:"Restored",user:user})

    }catch(err){
        res.status(500).json({msg:"Internal Sserver Error",err:err.message})
    }
}