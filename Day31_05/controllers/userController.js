const {User} =require("../models/utilitymodels");


exports.createUser =async(req,res)=>{
    try{
        let user =await User.bulkCreate(req.body);
        res.json({msg:"Creted",user:user})
    }
    catch(err){
        res.send("Soemthing went wrng")
    }
}

exports.getUser =async(req,res)=>{
    try{
        let user =await User.findAll()
        if(user.length==0){
            return res.send("User not Found");
        }
        else{
            return res.json({msg:"Something went wrng",user:user})
        }

    }
     catch(err){
        res.send("Soemthing went wrng")
    }

}