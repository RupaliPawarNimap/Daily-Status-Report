const {createData} =require("../controller/user");
const express =require("express");
const {upload} =require("../middlewares/upload")
const router =express.Router();


router.post("/upload",upload.fields([{name:"profile",maxCount:"1"},
    {name:"resume",maxCount:"1"}
]),createData)


module.exports=router