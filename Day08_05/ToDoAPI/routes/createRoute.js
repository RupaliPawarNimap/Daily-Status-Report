const express =require("express");
const router =express.Router();
const {creteTodo  }=require("../controllers/createTodo");
const {getTodo ,getToById} =require("../controllers/getController")
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");


  

router.post("/createTodo",creteTodo )
router.put("/updateTodo/:id",updateTodo)
router.get("/getTodo", getTodo  )
router.get("/getTodo/:id",getToById)
router.delete("/deleteTodo/:id",deleteTodo)
module.exports =router