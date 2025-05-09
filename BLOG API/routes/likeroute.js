const express =require("express");
const route =express.Router();
const {likeController,unlikeController} =require("../controllers/likeController");
route.post("/likes/like",likeController);
route.post("/likes/unlike",unlikeController)

module.exports =route