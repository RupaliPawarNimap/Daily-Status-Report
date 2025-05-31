const express =require("express");
const router =express.Router();
const {createUser,getUser} =require("../controllers/userController");
const { utilitiMethod,findAll, sumId } =require("../controllers/utilityMethod")


router.post("/users",createUser);
router.get("/filter",utilitiMethod)
router.get("/findAll" ,findAll)
router.get("/users",getUser)
router.get("/sum",sumId)


module.exports =router