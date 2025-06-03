const {QueryTypes} =require("sequelize")
const {User} =require("../models/userModel")
const bcrypt =require("bcrypt")

exports.createUSer =async(req,res)=>{
    try{
        
        let user =await User.create(req.body)
           
        if(user.length==0 ||!user){
            return res.status(400).json({msg:"Enter The User Details Properly"})
        }
        return res.status(201).json({msg:"User Created Successfully",user:user})
    }catch(err){
        if(err.name = "SequelizeUniqueConstraintError"){
             return res.status(400).json({msg:"Email Already Exist",err:err.message})

        }
              return res.status(500).json({msg:"Internal Server Error",err:err.message,name:err.name})

}
}

exports.getUser =async(req,res)=>{
     try{
        
       let user =await User.findAll();
        if(user.length==0 ||!user){
            return res.status(400).json({msg:"User Not Exist"})
        }
        return res.status(200).json({msg:"Users Fetched Successfully",user:user})
    } 
     
    
      catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message,name:err.name})
    }
}

exports.updateUser =async(req,res)=>{
    try{
           let user =await User.findByPk(req.params.id);
        if(!user){
            return res.status(400).json({msg:"User Not Exist"})
        }
        let updateUser =await user.update(req.body);
        return res.status(200).json({msg:"Users Updated Successfully",user:updateUser})
    } 

    catch(err){
        res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

 

User.beforeCreate(async(user)=>{
    try{
         user.password =await bcrypt.hash(user.password,10)
         console.log(user.password);
    }
    catch(err){
        res.send("Enter the valid password")
    }
})
User.beforeUpdate(async(user)=>{
    if(user.changed("password")){
          user.password =await bcrypt.hash(user.password,10)
         console.log(user.password);
    

    }
})

