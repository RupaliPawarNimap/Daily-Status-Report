const { User } = require("../models");
const nodemailer = require("nodemailer")
const bcrypt =require("bcrypt")
const { sendMail } = require("../utils/mail")

const forgotPass = async (req, res) => {
    try {
        let { email } = req.body;
        let user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({ msg: "Email not Exist" })
        }
        otp = Math.floor(10000+Math.random() * 90000 + 10 * 89);
        otp_expiry = new Date(Date.now() + 10 * 60 * 1000);
        user.otp = otp;
        user.otp_expiry = otp_expiry
        await user.save();
        await sendMail(email, `Your Otp To Reset Password`, `your Otp IS :${otp}`)

        return res.status(200).json({ msg: "Otp Send Successfully", otp })
    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })
    }
}

const resetPass = async (req, res) => {
    try {
 let { email,newpassword,otp } = req.body;
        let user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({ msg: "Email not Exist" })
        }
        if(user.otp!==otp){
            return res.status(400).json({msg:"Invalid Otp"})

        }
        if(new Date>user.otp_expiry){
            return res.status(400).json({msg :"OTP expired"})
        }
        user.password =await bcrypt.hash(newpassword,10);
        user.otp =null
        user.otp_expiry=null
       await user.save()
        return res.status(200).json({msg:"Password Reset Successfully"})
    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })
    }
}

module.exports ={resetPass,forgotPass}