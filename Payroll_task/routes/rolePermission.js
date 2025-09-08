const {createRolePermission, getAllRolePermmision} =require("../controllers/rolePermission")
const express =require("express");
const router =express.Router();


router.post("/rolepermissions",createRolePermission)
router.get("/rolepermissions",getAllRolePermmision)


module.exports=router