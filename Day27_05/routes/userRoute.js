const express =require("express");
const router =express.Router();
const validator = require("../Middleware/validator");
const {createUser,getUser,deleteUser,getUserById,updateUser,filteruser,deleteAll,filterByAge} =require("../controllers/users")

router.get("/users",getUser)
router.post("/users",validator,createUser);
router.get("/users/:id",getUserById);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser)
router.get("/filter",filteruser)
router.delete("/deleteAll",deleteAll)
router.get("/filterByAge",filterByAge)


module.exports =router