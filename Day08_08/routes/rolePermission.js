const express =require("express");
const { createRolePerm } = require("../controllers/rolePermission");
const router =express.Router();

router.post("/rolepermission",createRolePerm);

module.exports =router