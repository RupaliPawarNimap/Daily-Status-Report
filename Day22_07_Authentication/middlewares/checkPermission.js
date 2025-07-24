 
const {Permission,rolePermission} =require("../models/index");

const checkPermission =async(req,res,next)=>{
    try
  {
 
let permission =await Permission.findOne({
    where:{
        baseUrl:req.baseUrl.replace(/\/$/, ''),
        method:req.method,
        path:req.route?.path?.replace(/\/$/, '') || req.path.replace(/\/$/, '')
    }
})
// console.log(req.baseUrl,req.method,req.route.path);
if(!permission){
    res.status(400).json({msg:"Permission not found"})
}

let rolePermissin =await rolePermission.findOne({
    where:{
        role_id:req.user.role_id,
    permission_id :permission.id
    }
})
if(!rolePermissin){
    res.status(403).json({msg:"Unathorized"})
}
next();
}
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
 
}

module.exports ={checkPermission}