const nodemailer =require("nodemailer");
require("dotenv").config();




const transporter =nodemailer.createTransport({
    
    service: "gmail",
    port:587,
    secure:false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    },
    tls:{
        rejectUnauthorized:false
    }
})


const sendMail =async(to,subject,text)=>{
    const sendoption ={
        from:process.env.EMAIL,
        to,
        subject,
        text,
        

    };
    await transporter.sendMail(sendoption)
}

module.exports ={sendMail}