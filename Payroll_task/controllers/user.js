const {User, Role} =require("../models/index");
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")
require("dotenv").config();


const createUser =async(req,res)=>{
    try{
        let {first_name,last_name,email,password,role_name,is_active}=req.body
        if(!first_name || !last_name || !email || !password || !role_name || !is_active){
            return res.status(400).json({msg:"All Fields Are Required "})
        }
        let roleCheck =await Role.findOne({where:{role_name:role_name}});
        if(!roleCheck){
            return res.status(404).json({msg:"Role not exist"})
        }
        
        let checkEmail =await User.findOne({where:{email:email}});
        if(checkEmail){
            return res.status(400).json({msg:"Email Alredy Exist ,Plz Login In"})
        }
        let user =await User.create({
            first_name,last_name,email,password,role_name,role_id:roleCheck.id,is_active
        })
         if(!user || user.length==0){
            return res.status(400).json({msg:"Failed To Create user"})
         }
         return res.status(201).json({msg:"Register Successfully",user:user})

    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
 
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ msg: "Email not found, please register" });
    }
console.log(user);
     
    let checkpsd = await bcrypt.compare(password, user.password);
    if (!checkpsd) {
      return res.status(400).json({ msg: "Invalid password" });
    }

     
    let token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role_id: user.role_id,
        is_active: user.is_active,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ msg: "User login successful", token });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error", err: err.message });
  }
};

const getAllUser =async(req,res)=>{
    try{
        console.log(req);
        // console.log(req.path,req.baseurl,req.method);
        let user =await User.findAll();
        if(user.length==0){
            return res.status(404).json({msg:"USer Not Found"})
        }
        return res.status(200).json({msg:"User Found Successfully",user:user})
    }
        catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
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
    const { id } = req.params;
    const { first_name, last_name, email, is_active, role_id } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }   
    if (email && email !== user.email) {
      const existing = await User.findOne({ where: { email } });
      if (existing) {
        return res.status(400).json({ msg: "Email already in use by another user" });
      }
    }
    if (role_id) {
      const roleExists = await Role.findByPk(role_id);
      if (!roleExists) {
        return res.status(400).json({ msg: "Invalid role_id, role does not exist" });
      }
    }

   
    user.first_name = first_name ?? user.first_name;
    user.last_name = last_name ?? user.last_name;
    user.email = email ?? user.email;
    user.is_active = typeof is_active === "boolean" ? is_active : user.is_active;
    user.role_id = role_id ?? user.role_id;

    await user.save();

    return res.status(200).json({
      msg: "User updated successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      msg: "Internal Server Error",
      err: err.message,
    });
  }
};

module.exports = { updateUser };


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

module.exports ={createUser,getAllUser,login,deleteUser,updateUser,getuserbyId}