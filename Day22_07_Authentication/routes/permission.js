const express =require("express");
const router =express.Router();
const {createPermission,getPermission} =require("../controllers/permission")
const {verifyToken} =require("../middlewares/verifyToken")
const {checkPermission}=require("../middlewares/checkPermission")



router.get("/permissions",verifyToken,checkPermission,getPermission);
router.post("/permissions",verifyToken,createPermission);


module.exports =router