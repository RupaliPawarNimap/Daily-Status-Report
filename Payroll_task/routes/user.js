const express =require("express");
const router =express.Router();
const {createUser, getAllUser, login, deleteUser, updateUser, getuserbyId}=require("../controllers/user");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");



router.post("/users",createUser);
router.get("/users",checkAuth,getAllUser)
router.post("/login",login);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);
router.get("/users/:id"/*checkAuth,checkPermission*/,getuserbyId)


module.exports=router