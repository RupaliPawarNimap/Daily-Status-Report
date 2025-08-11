const express =require("express");
const router =express.Router();
const {forgotPass,resetPass} =require("../controllers/auth")


router.post("/forgot-password",forgotPass);
router.post("/reset-password",resetPass)


module.exports =router