const { dashBoard, authControllr } = require("../controlers/authController");
const { getAllUsers, createUser,getById } = require("../controlers/user");
const { checkRole } = require("../middlewares/authMiddleware");
const {validator} =require("../middlewares/validator")

const express =require("express");
const router =express.Router();


router.get("/users",getAllUsers)
console.log("Done");

router.post("/users",validator,createUser)
router.get("/users/:id",getById)
router.get("/auth-admin",checkRole("admin"),dashBoard)
router.get("/auth-student",checkRole("student"),dashBoard)
router.post("/login",authControllr)

module.exports=router