const jwt=require("jsonwebtoken");

const verifyToken=async(req,res,next)=>{
    let header =req.header.authorization|| req.headers.authorization;
    console.log(header);
    if(!header || !header.startsWith("Bearer")){
        return res.status(404).json({msg:"Token Not Found"});
    
    }
    token =header.split(" ")[1];
    let decode =await jwt.verify(token,
        process.env.JWT_SECREAT
    )
    if(!decode){
        return res.status(403).json("Invalid Token")
    }
    else{
        req.user =decode;
        next()
    }

}

module.exports={verifyToken}