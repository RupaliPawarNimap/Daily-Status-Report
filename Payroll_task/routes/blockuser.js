const {blockUser, getAllBlockUser} =require("../controllers/blockuser")
const express=require("express");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");
const router =express.Router()

router.post("/blocks",checkAuth,blockUser);
router.get("/blocks",checkAuth,checkPermission,getAllBlockUser)

module.exports=router