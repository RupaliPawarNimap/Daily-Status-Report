const nodemailer = require("nodemailer");

require("dotenv").config()
const sendMailToMultiple = async (req, res) => {
    let { recipants } = req.body;
    if (!recipants || recipants.length == 0) {
        return res.status(400).json({ msg: "Plz provide receipants" })
    }

    const transporter = nodemailer.createTransport({
        secure: false,
        service: "gmail",
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }, tls: {
            rejectUnauthorized: false
        }
    })
    let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    let batchsize = 50;
    try {
        for (let i = 0; i < recipants.length; i += batchsize) {

            let batch = recipants.slice(i, i + batchsize);
            console.log(batch);

            await transporter.sendMail({
                from:  process.env.EMAIL,
                to: batch.join(","),
                subject: "Bulk Send Mail",
                text: "Hey ",

            })
           await delay(500)
        }
          res.status(200).json({ msg: "Mail send Successfully" })
    }

    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })
    }
}




module.exports ={sendMailToMultiple}