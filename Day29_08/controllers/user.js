const {User} =require("../models/user")
const bcrypt=require("bcrypt")


const createUser=async(req,res)=>{
    try{
        let {name,email,password,profilePicture,resume,document}=req.body;
        let hashpsd=await bcrypt.hash(password,10);
        let user =await User.create({name,email,password:hashpsd,profilePicture,resume,document});
        if(!user){
            return res.status(400).json({msg:"Failed To Create USer"});

        }
        return res.status(201).json({msg:"User Created Successfully",user:user})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error ",err:err.message})
    }
}