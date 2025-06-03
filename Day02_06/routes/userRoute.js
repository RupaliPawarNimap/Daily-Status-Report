const express =require("express");
const router =express.Router();
const {creteUSer, rawGet, rawUpdate, rawDelet} =require("../controllers/rawQueries")
const { getUser, createUser, getUserById, deleteUser, updateUser, getByEmail } =require("../controllers/userContrller")



router.get("/users",getUser)
router.post("/users",createUser);
router.get("/users/:id",getUserById);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);
router.get("/usersMail/:email",getByEmail)
// router.post("/rawUsers",creteUSer )
// router.get("/rawusers",rawGet)
// router.put("/rawupdate/:id",rawUpdate)
// router.delete("/rawusers/:id",rawDelet)


module.exports =router