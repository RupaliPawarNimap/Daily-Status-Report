const {User} =require("../models/user");
const bcrypt =require("bcrypt")
const session =require("express-session")


const register =async(req,res)=>{
    try{
    const  {username,email,password} =req.body;
        console.log(username);
        // if(!username || !email || password){
        //     return res.json({msg:"All Fields Mandatory"})
        // }
        let user =await User.create({username:username,email:email,password:password});
        if(user.length ==0 || !user){
            return res.json({msg:"Failed To create User"})
        }
        else{
            return res.status(201).json({msg:"USer Created Sucessfuly"})
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }

}

const login =async(req,res)=>{
    try{
        let {email,password} =req.body
        
        if(!email || !password){
            return res.status(400).json({msg:"All Fields are MAdadory"})
        }
        let user =await User.findOne({email:email});
        if(!user){
            return res.status(404).json({msg:"User not Exists"})
        }
        
        let checkpsd =await bcrypt.compare(password,user.password);
        if(!checkpsd){
            return res.status(400).json({msg:"Password Invalid"})

        }
         req.session.username =user.username;
         return res.status(200).json({msg:"login Succesfully",session:req.session.username})
        
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

const profile =async(req,res)=>{
   res.status(200).json({msg:"This is profile",user:req.session.username})
}

module.exports = {
    login,register,profile
};

