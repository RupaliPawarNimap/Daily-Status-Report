const {uploadFile} =require("../controllers/fileds")

const express =require("express");
const { upload } = require("../middlwares/fileds");
const router =express.Router();


router.post("/fields",upload.fields([{name:"resume",maxCount:1},{name:"profilePic",maxCount:1},{name:"img",maxCount:5}]),uploadFile);

module.exports=router