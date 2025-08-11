const express =require("express");
const { createPermission, getAllPermission } = require("../controllers/permission");
const {authCheck} =require("../middlewares/authcheck");
const {verifyToken} =require("../middlewares/verfytoken")
const router =express.Router();


router.post("/permissions",verifyToken,authCheck,createPermission);
router.get("/permissions",verifyToken,authCheck,getAllPermission);


module.exports =router