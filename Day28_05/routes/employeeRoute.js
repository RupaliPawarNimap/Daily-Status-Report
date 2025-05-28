const express =require("express");
const router =express.Router();
const {createEmployee,getEmployee,deleteEmployee,updateEmployee,getEmployeeById} =require("../controllers/employeeController");
const validator=require("../middlwares/validator")

router.post("/users",validator,createEmployee);
router.get("/users",getEmployee);
router.put("/users/:id",updateEmployee);
router.delete("/users/:id",deleteEmployee);
router.get("/users/:id",getEmployeeById)



module.exports =router