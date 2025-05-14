const User =require("../models/user")
const bcrypt =require("bcrypt")
const handleErrors =(error)=>{
    console.error(error.message,error.code);
    const err ={email:"" ,password:""}
}
exports.signup_get =async(req,res)=>{
    res.send("This is signup get")
}
exports.signup_post =async(req,res)=>{
     const{email,password} =req.body;
    try{
 
    let hash =await bcrypt.hash(password,10)
    let newuser =await User.create({email:email,password:hash})
    res.send(newuser)
    }
    catch(err){
        
        existmail =await User.findOne({email})
        if(existmail){
            res.send("User already exist,Login");
            return;
        }
        console.error(err.message);
        res.send(err.message)
        res.status(400).json("User nt Created")
    }
    
    
}
exports.login_get =async(req,res)=>{
    res.send("This is login get")
}
exports.login_post =async(req,res)=>{
    res.send("This is login post")
}
