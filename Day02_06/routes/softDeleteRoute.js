const express =require("express");
const router =express.Router();
const {} =require("../controllers/SoftDelete");
const { deleteUser ,activeuser,includeDeleted,deleted,permanent,restoreUser} = require("../controllers/SoftDelete");


router.delete("/dusers/:id",deleteUser);
router.get("/dusers",activeuser)
router.get("/dusers/all",includeDeleted)
router.get("/dusers/deleted",deleted)
router.delete("/dusers/hard/:id",permanent)
router.patch("/dusers/restore",restoreUser)


module.exports =router



