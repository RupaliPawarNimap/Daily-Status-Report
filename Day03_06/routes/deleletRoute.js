const express =require("express");
const router =express.Router();
const {deleteUser, deletedUser, getAll, restoreUser} =require("../controllers/softDelete")


router.delete("/dusers/:id",deleteUser);
router.get("/dusers",deletedUser);
router.get("/dusers/all",getAll)
router.get("/dusers/restore/:id",restoreUser)


module.exports =router