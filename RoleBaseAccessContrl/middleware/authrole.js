

exports.authCheck=(allowRoles)=>{

    return (req,res,next)=>{
       
       
        if(!allowRoles || !allowRoles.includes(req.user.role)){
            return res.status(401).json({msg:"Access Denied insufficient Credentials"})
        }
        console.log(req.user.role)
        next()
    }
}