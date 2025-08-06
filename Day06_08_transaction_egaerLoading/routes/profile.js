const express =require("express");
const { createProfile } = require("../controllers/profile");

const router =express.Router();


router.post("/profiles",createProfile);


module.exports =router