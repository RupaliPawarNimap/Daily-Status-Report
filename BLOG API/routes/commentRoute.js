const express =require("express");
const router =express();
const {createComment} =require("../controllers/commentController")
router.post("/cerateComment",createComment);

module.exports =router