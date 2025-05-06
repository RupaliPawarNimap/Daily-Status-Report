const controller =require("../controller/crete")
const express =require("express");
const router =express.Router();
router.post("/crete",controller.data)
router.get("/get",controller.getdata)
module.exports =router