let user =require("../middlewares/usermiddleware")

console.log(user);
const jwt =require("jsonwebtoken")
 
 
exports.authControllr =async(req,res)=>{
    const{email,password} =req.body;
    let matchUser =user.find(p=>email==p.email)
    if(!matchUser || matchUser.email !==email){
       return res.status(401).json({msg:"Unauthorized user"})
    }
let token =jwt.sign({email:matchUser.email,role:matchUser.role},"secreat",{expiresIn:"1h"});
return res.json({token})

}
exports.dashBoard =async(req,res)=>{
    return res.send(`Login with ${req.user.email} and my role is ${req.user.role}`)
}