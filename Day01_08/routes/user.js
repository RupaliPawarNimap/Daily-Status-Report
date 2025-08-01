const express =require("express");
const { register, login, profile } = require("../controllers/register");
const { checkLogin } = require("../middlewares/checklogin");
const router =express.Router();


router.post("/register",register);
router.post("/login",login)
router.get("/profile",checkLogin,profile)


module.exports =router