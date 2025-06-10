const express =require("express");
const router =express.Router();
const aptDetails =require("../controllers/appointementDetails");


router.post("/aptDetails",aptDetails.createApt);
router.get("/aptDetails",aptDetails.getAllApt);
router.get("/aptDetails/:id",aptDetails.getAptById);
router.put("/aptDetails/:id",aptDetails.upadteApt);
router.delete("/aptDetails/:id",aptDetails.deleteApt)


module.exports=router