const express =require("express");
const router =express.Router();
const {createRole,getRole} =require("../controllers/role");


router.get("/roles",getRole);
router.post("/roles",createRole);



module.exports =router