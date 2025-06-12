const express =require("express");
const router =express.Router()

const {verifyToken} =require("../middleware/authMiddlewar")
const {authCheck} =require("../middleware/authrole");

//only admin can ccess
router.get("/admin",verifyToken,authCheck(["admin"]),(req,res)=>{
    res.send("This is only accesible by admin")
})

router.get("/manager",verifyToken,authCheck(["manager"]),(req,res)=>{
    res.send("This is only accesible by manager")
})

router.get("/user",verifyToken,(req,res)=>{
    res.send("This is only accesible by user")
})

module.exports =router;