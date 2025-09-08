const express=require("express");
const router =express.Router();
const {getAppointementDetails} =require("../controllers/appointementAttendees")



router.get("/getdetails",getAppointementDetails);

module.exports =router  