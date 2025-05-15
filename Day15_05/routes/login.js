const express =require("express");
const router =express.Router()
const {logging}=require("../middlewares/logging")
const {special}=require("../controlers/special")

router.get("/special",logging,special)
module.exports=router