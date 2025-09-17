const {RolePermission,Role,Permission} =require("../models/index")

const createRolePermission =async(req,res)=>{
    try{
        let {role_id,permission_id,} =req.body

      const   checkRole_id =await Role.findOne({id:role_id});
      if(!checkRole_id){
        return res.status(400).json({msg:"Role Not Found"})
      }
      let checkPermission_id =await Permission.findOne({id:permission_id});
      if(!checkPermission_id){
        return res.status(400).json({msg:"Permission Not Found"})
      }
      let check =await RolePermission.findAll({where:{
        role_id:role_id,
        permission_id

      }})
      if(check){
        return res.status(400).json({msg:"Already Exist The Access"})
      }
    let rolePermission =await RolePermission.create({role_id,permission_id})
    if(!rolePermission){
        return re.status(400).json({msg:"Failed To Create Rolepermission"})
    }
    return res.status(201).json({msg:"Role Permission Created Successfully",rolePermission:rolePermission})
    }
    catch(err){
        return res.status(500).json({msg:" Internal Server Error",err:err.message})
    }
}


const getAllRolePermmision =async(req,res)=>{
    try{
        let rolepermissions=await RolePermission.findAll();
        if(!rolepermissions || rolepermissions.length==0){
            return res.status(404).json({msg:"Failed To Fetch RolePermissions"})
        }
        return res.status(200).json({msg:"Fetched All Role Permissions",rolepermissions:rolepermissions})
    }
    catch(err){
        return res.status(500).json({msg:" Internal Server Error",err:err.message})
    }
}
module.exports ={createRolePermission,getAllRolePermmision}