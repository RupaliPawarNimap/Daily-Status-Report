const express =require("express");
const router =express.Router();
const appointement =require("../controllers/appointement")

router.post("/appointements",appointement.createappointement);
router.get("/appointements",appointement.getappointement);
router.get("/appointements/:id",appointement.getAppointementById);
router.put("/appointements/:id",appointement.updateAppointment);
router.delete("/appointements/:id",appointement.deleteAppointment)

module.exports =router