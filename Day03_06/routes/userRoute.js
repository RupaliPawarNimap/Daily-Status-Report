const express =require("express");
const router =express.Router();
const {createUSer, getUser, updateUser} =require("../controllers/userController")
const {validation} =require("../middlewares/validation")


router.post("/users",createUSer)
router.get("/users",getUser)
router.put("/users/:id",updateUser)


module.exports =router