const blockedUSer =require("../services/blockServices");


exports.createBlockUser =async(req,res)=>{
    try{

        let Blockuser =await blockedUSer.createUser(req.body);
        if(Blockuser.length==0){
            return res.status(404).json({msg:"Failed T Block User"})
        }
        return res.status(200).json({msg:'User Blocked Successfully',Blocked:Blockuser})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getAllBlockUser =async(req,res)=>{
    try{

        let Blockuser =await blockedUSer.getBlockedUser(req.body);
        if(Blockuser.length==0 || !Blockuser){
            return res.status(404).json({msg:"Failed To Fetch Block User"})
        }
        return res.status(200).json({msg:' Blocked User  Fetched Successfully',Blocked:Blockuser})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getBlockUserById =async(req,res)=>{
    try{

        let Blockuser =await blockedUSer.getBlockedUserByID(req.body);
        if(!Blockuser){
            return res.status(404).json({msg:"Failed To Fetch Block User"})
        }
        return res.status(200).json({msg:' Blocked User  Fetched Successfully',Blocked:Blockuser})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}
exports.deleteBlockedUser =async(req,res)=>{
    try{

        let Blockuser =await blockedUSer.deleteBlockedUSer(req.body);
        if(!Blockuser){
            return res.status(404).json({msg:"Failed To delete Block User"})
        }
        return res.status(200).json({msg:' Blocked User Deleted Successfully',Blocked:Blockuser})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.UpdateBlockedUser =async(req,res)=>{
    try{

        let Blockuser =await blockedUSer.updateBlockedUSer(req.body);
        if(!Blockuser){
            return res.status(404).json({msg:"Failed To Update Block User"})
        }
        return res.status(200).json({msg:' Blocked User  Updated  Successfully',Blocked:Blockuser})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}