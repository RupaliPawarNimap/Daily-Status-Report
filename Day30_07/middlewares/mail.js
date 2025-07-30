const nodemailer =require("nodemailer")
require("dotenv").config()

const createtransporter =nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    port:process.env.EMAIL_PORT,
    secure:process.env.EMAIL_SECURE==='true',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },
    tls:{
        rejectUnauthorized:false
    }
})


module.exports =createtransporter