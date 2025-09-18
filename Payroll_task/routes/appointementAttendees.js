const express=require("express");
const router =express.Router();
const {getAppointementDetails, getresponseOfAttendee,getReports, updateappointementResponse} =require("../controllers/appointementAttendees");
const { checkAuth } = require("../middleware/checkauth");
const { checkPermission } = require("../middleware/checkPermission");



router.get("/appointementAttendees",checkAuth,getAppointementDetails);
router.put("/appointementAttendees/response/:id",checkAuth,updateappointementResponse);
router.get("/appointementAttendees/response",checkAuth,getresponseOfAttendee)
router.get("/appointementAttendees/reports", checkAuth, getReports);


module.exports =router  