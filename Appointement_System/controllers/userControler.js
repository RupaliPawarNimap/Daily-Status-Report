const userService =require("../services/userServices");

exports.createUser =async(req,res)=>{
    try{
        let user =await userService.createUser(req.body);
        console.log(user);
        if(!user){
        return res.status(404).json("User dose Not Exist")
        }
        return res.status(201).json({msg:"User Creaated Successully",user:user})
    }
    catch(err){
    if(err.name=="SequelizeUniqueConstraintError"){
        return res.status(400).json("Email Already Exist")
    }
        return res.status(500).json({msg:"Internal Server Error",err:err.message,name:err.name})
    }
}

exports.getAllUser =async(req,res)=>{
      try{
        let user =await userService.getAllUSer();
        console.log(user);
        if(!user ||user.length==0){
          return  res.status(404).json("User dose Not Exist")
        }
        return res.status(200).json({msg:"User Fetched  Successully",user:user})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getUserById =async(req,res)=>{
      try{
        let user =await userService.getUserById(req.params.id);
        console.log(user);
        if(!user){
           return res.status(404).json("User dose Not Exist")
        }
        return res.status(200).json({msg:"User Fetched  Successully",user:user})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}
exports.deleteUser  =async(req,res)=>{
      try{
        let user =await userService.deleteUSer(req.params.id);
        console.log(user);
        if(user==0|| !user){
           return res.status(404).json("User dose Not Exist")
        }
        return res.status(200).json({msg:"User Deleted Successully",user:user})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.updateUSer  =async(req,res)=>{
      try{
        let user =await userService.updateUSer(req.params.id,req.body);
        console.log(user);
        if(!user){
           return res.status(404).json("User dose Not Exist")
        }
        return res.status(200).json({msg:"User updated Successully",user:user})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}