const { user } = require("../models/file")
require("dotenv").config()
const path = require("path")
const createtransporter = require("../middlewares/mail")



const createData = async (req, res) => {
    try {
        let { name, email } = req.body;
        let profile = req.files?.profile?.[0];
        let resume = req.files?.resume?.[0];
        let uploadRecord = await user.create({
            name,
            email,
            profile_path: profile.filename,
            profile_originalname: profile.originalname,
            resume_path: resume.filename,
            resume_originalname: resume.originalname

        })

        if (!uploadRecord) {
           return  res.status(400).json({ msg: "Failed to Uplaod data" })
        }
        else {

            let sendEmail = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Document Verification",
                text: ` Good Morning 
                The name is ${name} and ur email is :${email}
                The Document are attached here:
                `,
                attachments: [{
                    filename: profile.originalname,
                    path: path.join(__dirname, "../uploads", profile.filename)
                },
                {
                    filename: resume.originalname,
                    path: path.join(__dirname, "../uploads", resume.filename)
                }
                ]

            }
            try {
                await createtransporter.sendMail(sendEmail);
            }catch(err){
                console.log(email,sendEmail.attachments);
                return res.status(400).json({msg:"Failed To send mail"})
            }
            res.status(201).json({ msg: "Data Added Successfully", uploadRecord })
        }


    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Something went wrong", err: err.message })
    }
}
module.exports = { createData }