const {createRolePermission, getAllRolePermmision} =require("../controllers/rolePermission")
const express =require("express");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");
const router =express.Router();


router.post("/rolepermissions",checkAuth,checkPermission,createRolePermission)
router.get("/rolepermissions",checkAuth,checkPermission,getAllRolePermmision)


module.exports=router