const { User } = require("../models/index")
 const  bcrypt =require("bcrypt")
const  jwt =require("jsonwebtoken")
const createUser = async (req, res) => {
    try {
        const { name, password, email, role_id } = req.body
        if (!name || !password || !email|| !role_id) {
            return res.json({ msg: "Provide all Fields" })
        }
        let user = await User.create({name, email, password, role_id});
        if (!user || user.length == 0) {
            return res.json({ msg: "Failed to create User" })
        }
        else {
            return res.json({ msg: "User Created Suceesfully", user: user })
        }
    }
    catch (err) {
        res.json({ msg: "Something went wrong", err: err.message })
    }
}

const loginUser =async(req,res)=>{
    try{
        const {email,password} =req.body;
        if(!email || !password){
            return res.json({msg:"Plz Provide all the Fields"})
        }
        let user =await User.findOne({where:{email:email}});
        if(!user){
            return res.json({msg:"User not found"})
        }
       
        let passwordCheck =await bcrypt.compare(password,user.password);
        if(!passwordCheck){
            return res.json({msg:"Password is incorrect plz provide correct"});
        }

        let token =await jwt.sign({role_id:user.role_id,email:user.email,name:user.name},process.env.JWT_SECREAT,{expiresIn:"1hr"})
        if(!token){
            return res.json({msg:"Failed token cretion"})
        }
        return res.json({msg:"Login Successfull",Token:token,user:{
            id:user.id,
            name:user.name,
            email:user.email
        }})
    }
    catch(err){
        return res.json({msg:"Something went wrong",err:err.message})
    }
}


const getUser = async (req, res) => {
    try {
        let user = await User.findAll();
        if (user.length == 0 || !user) {
            return res.json({ msg: "Users not exist " })
            
        }
        else {
              return res.json({ msg: "User Fetched Successfully", user: user })
        }
    }
    catch (err) {
        res.json({ msg: "Something went wrong", err: err.message })
    }
}

const getuserbyId = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            return res.json({ msg: "plz provide the id in params" })
        }
        let user = await User.findByPk(id);
        if (!user || user.length == 0) {
            return res.json({ msg: "User not found" })
        }
        return res.json({ msg: "User fetched successfully", user: user })
    }
    catch (err) {
        res.json({ msg: "Something went wrong", err: err.message })
    }

}

const updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            return res.json({ msg: "Plz provide id" })
        }
        let user = await User.findByPk(id);
        if (!user) {
            return res.json({ msg: "User not found" })
        }
        let { name, email, password } = req.body;
        if(name) user.name=name;
        if(email) user.email =email;
        if(password) user.password=password
        await user.save();
        return res.status(200).json({msg:"User Updated Successfully",user:user})

    }
    catch (err) {
        res.json({ msg: "Something went wrong", err: err.message })
    }
}

const deleteUser =async(req,res)=>{
    try{
       let id = req.params.id;
        if (!id) {
            return res.json({ msg: "Plz provide id" })
        }
        let user = await User.findByPk(id);
        if (!user) {
            return res.json({ msg: "User not found" })
        }
        let deleteUser =await User.destroy({where:{id}})
        if(!deleteUser){
            return res.json({msg:"Failed To delete user"})
        }
        return res.json({msg:"User deleted Successully"})
    }
    catch(err){
        return res.json({msg:"Something went wrong",err:err.message})
    }
}


module.exports ={createUser,getUser,getuserbyId,updateUser,deleteUser,loginUser}