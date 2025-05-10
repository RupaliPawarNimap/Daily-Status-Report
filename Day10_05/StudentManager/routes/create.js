const {CreateStudent ,getStudents,getStudentById,updateStudent,deleteStudent} =require("../controllers/createStudent");
const express =require("express");
const router =express.Router();
router.post("/creteStudents",CreateStudent );
router.get("/getStudents",getStudents);
router.get("/getStudents/:id",getStudentById);
router.delete("/deleteStudents/:id",deleteStudent);

router.put("/getStudents/:id",updateStudent)

module.exports =router