const { sequelize } = require("../config/db")
const {Profile, User} =require("../models/index")


const createProfile =async(req,res)=>{
    try{
        let result =await sequelize.transaction(async t =>{
            let {name,email} =req.body;
            let user =await User.create({name,email},{transaction:t});
            if(!user || user.length==0){
                throw new Error("Failed To create USer")
            }
            let profile =await Profile.create({userId:user.id,name:user.name},{transaction:t})
            if(!profile  || profile.length==0){
                throw new Error("Profile not Created ")
            }
            return profile
       
            
        })
        return res.status(201).json({msg:"Profile Created",result})

    }
    catch(Err){
        return res.status(500).json({msg:"Internal Server Error",Err})
    }
}

module.exports ={createProfile}