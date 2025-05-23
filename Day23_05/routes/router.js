const express =require("express");
const router =express.Router();
const {validator} =require("../middlewares/validator")
const {getUsers,createUser,getUsersById,deleteuser,updateUser} =require("../controllers/user")


router.get("/users/:id",getUsersById);
router.post("/users",validator,createUser);
router.get("/users",getUsers)
router.delete("/users/:id",deleteuser);
router.put("/users/:id",updateUser)



module.exports =router