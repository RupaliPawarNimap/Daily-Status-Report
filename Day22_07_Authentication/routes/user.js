const express =require("express");
const router =express.Router();
const {createUser,getuserbyId,getUser,deleteUser,loginUser,updateUser} =require("../controllers/user")
const {verifyToken} =require("../middlewares/verifyToken")
const {checkPermission} =require("../middlewares/checkPermission")

router.get("/users", verifyToken,checkPermission,getUser);
router.post("/users",createUser);
router.get("/users/:id",getuserbyId);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);
router.post("/users/login",loginUser);


module.exports =router