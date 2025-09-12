const {transporter} =require("../utils/sendemail")
const {User} =require("../models/index")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
 
const {redisClient} =require("../config/redis")


 const generateOtp=()=>{
    return Math.floor(100000+Math.random()*900000)
 }
 
 
    

// console.log(ge);
const forgotPass =async(req,res)=>{
    try{
        const {email }=req.body
        let user=await User.findOne({where:{email:email}})
        if(!user){
            return res.status(404).json({msg:"Email not Exist"})
        }
 user.otp=generateOtp();
 user.otp_expiry=new Date(Date.now()+10*60*1000);

 user.save()

let sendmail =await  transporter.sendMail({
    to:email,
    from:process.env.NODEMAILER_USER,
    subject:`Forgot Password OTP`,
    text:`Your OTP is ${user.otp}.OTP is Valid For 10 min Only `
 })
 return res.status(200).json({msg:"OTP Sent Successfully",sendmail:sendmail})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Sever Error",err:err.message})
    }
}

const resetPass =async(req,res)=>{
    try{
        let {email,otp,password}=req.body
        let user =await User.findOne({where:{email:email}});
         if(!user){
            return res.status(404).json({msg:"Email not Exist"})
        }
      
        console.log(otp,user.otp);

        if(otp!==user.otp){
return res.status(400).json({msg:"Plz Provide valid Otp"})
        }
        if(Date.now()>user.otp_expiry){
            return res.status(400).json({msg:"OTP EXpired"})
        }
        user.password =password;
          user.otp=null;
        user.otp_expiry=null
        await user.save();
       

        return res.status(200).json({msg:"Password Reset Successfully"})

    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Errror",err:err.message})
    }
}

 
const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];    

    const decoded = jwt.decode(token);         
    const exp = decoded.exp;
    const now = Math.floor(Date.now() / 1000);
    const ttl = exp - now;

     
    await redisClient.setEx(`blacklist:${token}`, ttl, "true");

    return res.status(200).json({ msg: "Logout successful" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error", err: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
 
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ msg: "Email not found, please register" });
    }
// console.log(user);
     
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

    return res.status(200).json({ msg: "User login successful",  first_name:user.first_name,role:user.role_name,token:token});
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error", err: err.message });
  }
};


module.exports ={forgotPass,resetPass,login,logout}