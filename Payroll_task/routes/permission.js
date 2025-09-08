const {createPermission, getAllPermission} =require("../controllers/permission");
const express =require("express");
const router =express.Router()

router.post("/permissions",createPermission)
router.get("/permissions",getAllPermission)


module.exports =router