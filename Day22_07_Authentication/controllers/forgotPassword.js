const { where } = require("sequelize");
const {User} =require("../models/index");
const nodemailer =require("nodemailer");
const bcrypt =require("bcrypt")


const transporter =nodemailer.createTransport({
    service:"gmail",
    secure:false,
    path:587,
    auth:{
        user:"rupali.pawar@nimapinfotech.com",
       pass: "vxpcmkpryjvgieek"
    },
    tls:{
        rejectUnauthorized:false
    }
    

    

})
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const forgotPassword =async(req,res)=>{
    try{
        const {email} =req.body
        let user =await User.findOne({where:{email:email}});
        if(!user){
            return res.status(400).json({msg:"user not found"})
        }
         let otp =generateOTP();
         let otp_expiry=new Date(Date.now()+10*60*1000)

         user.otp=otp
         user.otp_expiry=otp_expiry
         await user.save()

         const info =await transporter.sendMail({
            to:email,
            subject:"Forgot Password",
            text:`your otp is ${otp} It is valid for 10 Min`
         })
res.status(200).json({msg:"OTP sent Successfully"})
    }
    catch(err){
        res.status(500).json({msg:"Internal server Error",err:err.message})
    }
    
}

const resetPassword =async(req,res)=>{
    try{
        let {email,otp,newpsd} =req.body;
        let user =await User.findOne({where:{email}});
        if(!user){
            return res.status(404).json({msg:"User not found"});
        }
        console.log(user.otp,otp);
        if(user.otp !==otp){
            return res.status(400).json({msg:"plz provide correct otp"})
        }
        if(new Date>new Date(user.otp_expiry)){
            return res.status(400).json({msg:"Otp Expired"})
        }
        const hashed =await bcrypt.hash(newpsd,10);
        user.password =hashed,
        user.otp=null,
        user.otp_expiry=null
        await user.save()
        res.status(200).json({msg:"Password Updated Successfully"})

    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
}

module.exports ={resetPassword,forgotPassword}