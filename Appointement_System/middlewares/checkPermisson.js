exports.checkPermission =(allowRoles)=>{
    return(req,res,next)=>{
        if(!allowRoles|| !allowRoles.includes(req.user.role_id)){
            return res.status(403).json("Insufficiaent Data ,Access Denied")
        }
        next()
    }
}