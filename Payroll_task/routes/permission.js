const {createPermission, getAllPermission} =require("../controllers/permission");
const express =require("express");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");
const router =express.Router()

router.post("/permissions",checkAuth,checkPermission,createPermission)
router.get("/permissions",getAllPermission)


module.exports =router