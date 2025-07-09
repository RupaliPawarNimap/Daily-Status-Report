const {getOneUser,getUser,deletUser,updateUser,CreteUSer} =require("../controller/user");
const express =require("express");
const router =express.Router();


router.get("/users",getUser);
router.post("/users",CreteUSer);
router.get("/users/:id",getOneUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deletUser);


module.exports =router;



