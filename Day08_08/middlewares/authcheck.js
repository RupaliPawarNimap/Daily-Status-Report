const { where } = require("sequelize");
const { Permission, RolePermission } = require("../models");

const authCheck =async(req,res,next)=>{                                                                             
    try{
        let method =req.method;
        let baseUrl =req.baseUrl
        let path =req.path|| req.routes?.path
        let roleId=req.user?.role_id;
console.log(method,baseUrl,path,roleId);
        let checkPermission =await Permission.findOne({where:{
            method,
            baseUrl,
            path
        }});
        if(!checkPermission){
            return res.status(404).json({msg:"Permision not Found"})
        }
        let RolePermissions =await RolePermission.findOne({where:{
            roleId:roleId,
            permissionId:checkPermission.id
        }})
        if(!RolePermissions){
        return res.status(404).json({msg:"U have not Acees to do that "})
        }
       next()
    }
    catch(err){
        return res.status(500).json({msg:"Internal server Error",err:err.message});
    }
}

module.exports ={authCheck}