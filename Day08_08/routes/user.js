const express =require("express");
const router =express.Router()
const {register, Login, getAll} =require("../controllers/user")
const {verifyToken} =require("../middlewares/verfytoken");
const {authCheck}=require("../middlewares/authcheck")


router.post("/users/register",register);
router.post("/users/login",Login)
router.get("/users",verifyToken,authCheck,getAll)


module.exports =router