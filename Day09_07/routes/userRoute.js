const express =require("express");
const router =express.Router()
const {getAllUser,updateUser,deleteUSer,registerUser,loginUser} =require("../controller/userC");

router.get("/users",getAllUser);
router.post("/users",registerUser);
router.delete("/users/:id",deleteUSer);
router.post("/login",loginUser);
router.put("/users",updateUser)


module.exports =router

