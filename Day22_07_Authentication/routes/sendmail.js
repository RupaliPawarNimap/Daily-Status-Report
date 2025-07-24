const express =require("express");
const router =express.Router();
const {sendMailToMultiple} =require("../controllers/sendMail");

router.post("/mail-multiple",sendMailToMultiple);



module.exports =router
