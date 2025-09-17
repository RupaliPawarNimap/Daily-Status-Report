const express =require("express");
const router =express.Router();
const {createUser, getAllUser,  deleteUser, updateUser, getuserbyId}=require("../controllers/user");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");



router.post("/users",createUser);
router.get("/users",checkAuth,getAllUser)
 
router.delete("/users/:id",checkAuth,checkPermission,deleteUser);
router.put("/users/:id",checkAuth,updateUser);
router.get("/users/:id",checkAuth,checkPermission,getuserbyId)


module.exports=router