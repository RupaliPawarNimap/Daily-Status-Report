const {transporter} =require("../utils/sendemail")
const {User} =require("../models/index")


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


module.exports ={forgotPass,resetPass}