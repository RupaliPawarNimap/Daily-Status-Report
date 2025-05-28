const {Sequelize} =require("sequelize")
const User =require("../models/employeemodel")


exports.createEmployee =async(req,res)=>{
    console.log("Hello");
    try{
        const user =await User.create(req.body);
        if(user.length==0){
           return res.status(400).json("Employees Not Exist")
        }
        else{
            return res.status(200).json({msg:"Employees Created Successfully",Employee:user})

        }
    }
    catch(err){
        res.status(500).json("Internal Server Error")
    }
}


exports.getEmployee =async(req,res)=>{
    try{
        let users =await User.findAll();
        if(!users||users.length==0){
            return res.status(400).json("Users Not Exist")
        }
        else{
            return res.status(200).json({msg:"Users Found",user :users})
        }

    }
    catch(err){
        res.status(500).json("Something went Wrong",err.message)
    }
}

exports.getEmployeeById =async(req,res)=>{
    try{
        let user =await User.findByPk(req.params.id);
        console.log(user);
        if(!user){
            res.status(404).json("user not Found")
        }
        else{
            return res.status(200).json({msg:"User Found",user:user})
        }
    }
    catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})
    }

}
exports.deleteEmployee =async(req,res)=>{
    try{
        let user =await User.findByPk(req.params.id);
        let deleteUSer =await user.destroy()
         if(!user){
            res.status(404).json("user not Found")
        }
        else{
            return res.status(200).json({msg:"User deleted",user:deleteUSer})
        }
    }
      catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})
    }
}
exports.updateEmployee =async(req,res)=>{
    try{
        let id =parseInt(req.params.id)
        let user =await User.findByPk(req.params.id);
        console.log(user);
        let updatedUSer =await user.update(req.body)
         if(!user){
         return   res.status(404).json("user not Found")
        }
        else{
            return res.status(200).json({msg:"User updated",user:updatedUSer})
        }

    }
       catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})
    }
}