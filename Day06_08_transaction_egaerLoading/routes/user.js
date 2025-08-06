const express =require("express");
const { getuser, createUser } = require("../controllers/user");
const { createEntrollmet, getDetails } = require("../controllers/entrollment");

const router =express.Router();



router.get("/users",getuser);
router.post("/users",createUser)
router.post("/entrollments",createEntrollmet)
router.get("/entrollments",getDetails)


module.exports =router