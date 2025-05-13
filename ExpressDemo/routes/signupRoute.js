 

const express =require("express");
const route =express.Router();
const {SignUp,Login}=require("../controllers/signup");

route.post("/signup",SignUp);
route.post("/login",Login)

module.exports =route