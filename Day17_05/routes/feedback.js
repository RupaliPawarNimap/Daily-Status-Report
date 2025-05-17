const express =require("express");
const router =express();
const {timelimit} =require("../middleware/feedback")
const {addFeedback} =require("../cntrollers/feedback");
const file =require("../middleware/filemodule")
const filec =require("../cntrollers/file")
 


router.post("/feedback",timelimit, addFeedback);
router.get("/file", file,filec)

module.exports =router