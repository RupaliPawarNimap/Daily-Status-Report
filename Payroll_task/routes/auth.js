const express =require("express");
const router =express.Router();
const {forgotPass, resetPass,login,logout} =require("../controllers/auth");
const { checkAuth } = require("../middleware/checkauth");
const {validate} =require("../middleware/validate")
 
const {loginSchema,forgotPas} =require("../validators/auth")



router.post("/forgotpassword",validate(forgotPas),forgotPass)
router.post("/resetpassword",resetPass)
router.post("/login",validate(loginSchema),login);
router.get("/logout",checkAuth,logout)


module.exports =router