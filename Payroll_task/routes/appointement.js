const express =require("express");
const router =express.Router();
const {createAppointment,getAllApt, getAptById,updateAppointment, getAppointmentsByDate, deleteAppointment, getAppointementStatus, exportAppointments} =require("../controllers/appointement");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");



router.post("/appointements",checkAuth,checkPermission,createAppointment)
// router.get("/appointements",getAllApt)
// router.get("/appointements/:id",getAptById)
// router.get("/appointements/filter",getAppointmentsByDate)
router.put("/appointements/:id",updateAppointment)
router.delete("/appointements/:id",deleteAppointment)
// router.get("/appointements",getAppointementStatus)
router.get("/appointements/exports",exportAppointments)


module.exports=router