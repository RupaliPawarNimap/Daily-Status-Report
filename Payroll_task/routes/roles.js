const {createRole, getAllRole} =require("../controllers/role")
const express =require("express");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");
const router =express.Router();


router.post("/roles"/*checkAuth,checkPermission*/,createRole)
router.get("/roles"/*checkAuth,checkPermission*/,getAllRole)


module.exports=router