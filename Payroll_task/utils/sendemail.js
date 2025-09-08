const nodemailer=require("nodemailer")


const transporter =nodemailer.createTransport({
    port:587,
    secure:false,service:"gmail",
    auth:{
        user:process.env.NODEMAILER_USER,
        pass:process.env.NODEMAILER_PASS
    }
})


module.exports={transporter}