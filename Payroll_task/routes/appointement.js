const express =require("express");
const router =express.Router();
const {createAppointment,getAllApt, getAptById,updateAppointment, getAppointmentsByDate, deleteAppointment, getAppointementStatus, exportAppointments} =require("../controllers/appointement");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");



router.post("/appointements",checkAuth, createAppointment)
router.get("/appointements",getAllApt)
router.get("/appointements/:id",getAptById)
router.get("/appointements/date/filter",checkAuth,checkPermission,getAppointmentsByDate)//only for admin
router.put("/appointements/:id",updateAppointment)
router.delete("/appointements/:id",deleteAppointment)
router.get("/appointements/status",getAppointementStatus)
router.get("/appointements/exports/all",exportAppointments)


module.exports=router