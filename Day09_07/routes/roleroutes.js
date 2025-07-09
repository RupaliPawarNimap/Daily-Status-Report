const express=require("express");
const router =express.Router();
const {createRole,getRole} =require("../controller/roleC");


router.post("/role",createRole);
router.get("/role",getRole)


module.exports=router