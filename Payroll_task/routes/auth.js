const express =require("express");
const router =express.Router();
const {forgotPass, resetPass} =require("../controllers/auth")



router.post("/forgotpassword",forgotPass)
router.post("/resetpassword",resetPass)


module.exports =router