const express =require("express");
const router =express.Router();
const {createRolePermission,getRolePermission} =require("../controllers/rolePermission");


router.get("/",getRolePermission);
router.post("/",createRolePermission);


module.exports =router