const express =require("express");
const router =express.Router();
const postContoller =require("../controllers/postcontroller")
console.log("Router Fetched")

router.get("/getPosts",postContoller.getPosts)
router.post("/createPost",postContoller.createPost);


module.exports =router