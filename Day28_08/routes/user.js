const express =require("express");
const { createUser, getAllUSer, updateUser, deleteUser } = require("../controllers/user");
 
const router =express.Router();



router.post("/users",createUser);
router.get("/users",getAllUSer);
router.put("/users/:id", updateUser); 
router.delete("/users/:id",deleteUser)

module.exports=router