const user =require("../controlers/user");
const jwt =require("jsonwebtoken")
exports.checkRole =(role)=>{
    return (req,res,next)=>{
         const author = req.headers.authorization;
        if(!author){
           return res.status(401).json("No token Provided")
        }
        let token =author.split(" ")[1];
        try{
            let decoded =jwt.verify(token,"secreat")
            console.log(decoded);
            if(decoded.role!==role){
               return  res.status(400).json("Access Denied");
            }
            req.user=decoded
            next()
        }
        catch(err){
            res.status(403).json(err.message)
        }
    }
}