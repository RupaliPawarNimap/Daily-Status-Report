const { RolePermission } =require("../models");

const createRolePerm =async(req,res)=>{
    try{
let {roleId ,permissionId} =req.body;
let rolepermission =await RolePermission.create({roleId,permissionId});
return res.status(201).json({msg:"Role Permission added",role:rolepermission});
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error" })
    }
}
module.exports ={createRolePerm}