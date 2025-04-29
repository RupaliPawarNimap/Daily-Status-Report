const express =require("express");
const router =express.Router();
const controller =require("../controller/user")
router.post("/",controller.createUser);
router.get("/",controller.getuser)
router.get("/:id",controller.getUserId);
router.delete("/:id",controller.deleteUser)
module.exports =router