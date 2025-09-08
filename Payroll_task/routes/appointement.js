const express =require("express");
const router =express.Router();
const {createAppointment} =require("../controllers/appointement");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");


router.post("/appointements",checkAuth,checkPermission,createAppointment)


module.exports=router