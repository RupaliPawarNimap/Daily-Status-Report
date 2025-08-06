const express =require("express");
const { getCourse, createCourse } = require("../controllers/course");

const router =express.Router();



router.get("/courses",getCourse);
router.post("/courses",createCourse)


module.exports =router