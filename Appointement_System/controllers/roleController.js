const roleService =require("../services/roleService");

exports.createRole =async(req,res)=>{
    try{
        let role =await roleService.createRole(req.body);
        if(!role){
            return res.status(404).json("Plz Enter The Role First")
        }
        return res.status(201).json({msg:"Role Added Succssfully",data:role})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getAllRole =async(req,res)=>{
    try{
        let role =await roleService.getAllRole();
        if(role.length==0){
            return res.status(404).json("Role Does not Exist")
        }
        return res.status(200).json({msg:"Role Fetched Succssfully",role:role})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

exports.getRoleById =async(req,res)=>{
    try{
        const role =await roleService.getRoleByID(req.params.id);
        if(!role){
            return res.status(404).json({msg:"Role not Found"})
        }
        return res.status(200).json({msg:"Role Fetched Successully",role:role})

    }catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})

    }
}

exports.updateRole  =async(req,res)=>{
    try{
        const role =await roleService.updateRole(req.params.id,req.body);
        if(!role||role==0){
            return res.status(404).json({msg:"Role not found"})
        }
        return res.status(200).json({msg:"Role Updated Successully",role:role})

    }catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})

    }
}

exports.deleteRole  =async(req,res)=>{
    try{
        const role =await roleService.deleteRole(req.params.id,req.body);
        if(!role){
            return res.status(404).json({msg:"Role not Exist"})
        }
        return res.status(200).json({msg:"Role Deleted Successully",role:role})

    }catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})

    }
}