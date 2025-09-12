const jwt =require("jsonwebtoken");
const { json } = require("sequelize");
const {redisClient} =require("../config/redis")

const checkAuth =async(req,res,next)=>{

    try{
    const authHeader =req.headers.authorization
    if(!authHeader|| !authHeader.startsWith("Bearer") ){
        return res.status(401).json({msg:"Token Not Found"})
    }
    let token=authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({msg:"Token Missing"})
    }
     const isBlacklisted = await redisClient.get(`blacklist:${token}`);
    if (isBlacklisted) {
      return res.status(401).json({ msg: "Token has been logged out" });
    }
    let decode =jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
        return res.status(403).json({msg:"Unauthoized"})
    }
    req.user =decode
    next()
    }
    catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
 


}

module.exports={checkAuth}