 const {rolePermission, Permission} =require("../models/index")


const createRolePermission =async(req,res)=>{
    try{

        const {role_id,permission_id} =req.body
        if(!role_id || !permission_id){
            return res.status(400).json({msg:"plZ provide All the Fields"})
        }
        let roleper =await rolePermission.create({role_id,permission_id});
        if(!roleper){
            return res.status(400).json({msg:"Failed to add Role Permision"})
        }
        return res.status(200).json({msg:"rolepermission added Succesffully",roleper:roleper})
    }
    catch(err){
        return res.status(500).json({msg:"Something Went wrong",err:err.message})
    }
}


const getRolePermission =async(req,res)=>{
    try{
        let rp =await rolePermission.findAll({
            include:[
                {
                    model:Permission,
                    as:"permission",
                    attributes:["action","description","baseUrl"]
                }
            ]
        });
        if(!rp || rp.length==0){
            return res.status(400).json({msg:"No Role Permissions are available"})
        }
        return res.status(200).json({msg:"All Permission",permission:rp})
    }
        catch(err){
        return res.status(500).json({msg:"Something Went wrong",err:err.message})
    }

}

module.exports ={createRolePermission,getRolePermission}