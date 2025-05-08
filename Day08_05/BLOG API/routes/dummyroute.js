const dummycontroller =require("../controllers/dummyController");
const express =require("express");
const router =express.Router();
router.get("/dummy",dummycontroller.dummy);
module.exports =router