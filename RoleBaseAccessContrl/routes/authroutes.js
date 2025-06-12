const express =require("express");
const router =express.Router();
const controller =require("../controllers/authContrller") 

router.post("/register", controller.RegisterUser);
router.post("/login",controller.loginUser);
router.get("/getAll",controller.getRegister)





module.exports=router