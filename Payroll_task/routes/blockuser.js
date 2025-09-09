const {blockUser, getAllBlockUser} =require("../controllers/blockuser")
const express=require("express");
const { checkAuth } = require("../middleware/checkauth");
const router =express.Router()

router.post("/blocks",checkAuth,blockUser);
router.get("/blocks",getAllBlockUser)

module.exports=router