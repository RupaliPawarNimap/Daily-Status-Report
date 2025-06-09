const express =require("express");
const router =express.Router()
const roleRoutes =require("../controllers/roleController");

router.post("/roles",roleRoutes.createRole);
router.get("/roles",roleRoutes.getAllRole);
router.get("/roles/:id",roleRoutes.getRoleById);
router.put("/roles/:id",roleRoutes.updateRole);
router.delete("/roles/:id",roleRoutes.deleteRole)


module.exports =router
