const {Permission, RolePermission} = require('../models/index.js');
const checkPermission =async( req, res, next)=>{
    try{
 const perm = await Permission.findOne({
        where:{
            base_url: req.baseUrl ,
            method: req.method,
            path:req.route.path
        }
    });
    
    if(!perm){
        return res.status(404).json({msg:"Permission not Found"})
    }
    const ok = await RolePermission.findOne({
        where:{
           role_id: req.user.role_id,
           permission_id: perm.id,
        }
    });
     
    if(!ok){
        return res.status(403).json({msg:"Forbidden ",err:"U Dont Have Access To this Route"})
    }
    next()
   
}
catch(err){
    return res.status(500).json({msg:"Internal Server Error",err:err.message})
}
    }
    

module.exports = {checkPermission};