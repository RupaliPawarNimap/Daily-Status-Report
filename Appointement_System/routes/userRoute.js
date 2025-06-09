const express =require("express");
const router =express.Router()
const userController =require("../controllers/userControler");


router.post("/users",userController.createUser);
router.get("/users",userController.getAllUser);
router.get("/users/:id",userController.getUserById);
router.put("/users/:id",userController.updateUSer);
router.delete("/users/:id",userController.deleteUser)


module.exports =router
