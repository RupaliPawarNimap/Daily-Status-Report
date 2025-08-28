const express =require("express");
const router =express.Router();
// const {}=require("../controllers/");
const { createRole,getAll } = require("../controllers/role");


router.post("/roles",createRole);
router.get("/roles",getAll);
module.exports =router