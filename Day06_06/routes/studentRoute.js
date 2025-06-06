const express =require("express");
const router =express.Router();
const controller =require("../contrllers/studentControler")


router.get("/students",controller.getStudent);
router.post("/students",controller.createStudent)
router.put("/students/:id",controller.updateStudent);
router.delete("/students/:id",controller.deleteStudent);
router.get("/students/:id",controller.getStudentById)


module.exports =router