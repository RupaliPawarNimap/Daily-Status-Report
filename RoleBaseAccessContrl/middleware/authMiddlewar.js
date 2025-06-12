const jwt =require("jsonwebtoken");


exports.verifyToken=(req,res,next)=>{
    try{
    let header =req.headers.Authorization||req.headers.authorization;
    if(!header || !header.startsWith("Bearer") ){
res.status(401).json({msg:"No Header Found"});

    }
    let token =header.split(" ")[1];
    console.log(token)
    if(!token){
        res.status(401).json("Token NoT Recgnized")
    }
    let decode =jwt.verify(token,process.env.JWT_SECREAT);
    if(!decode){
        res.json({msg:"Failed To Verify"})
    }
    else{
        req.user =decode
        console.log(req.user);
        console.log("Decoded user is",req.user);
        next();
    }
   
    }
      catch(err){
        res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
 

     

}