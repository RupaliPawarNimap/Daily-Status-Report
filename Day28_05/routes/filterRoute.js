const express =require("express");
const router =express.Router();
const {filterbyAge,filterMethod } =require("../Filtering/agefilter")

router.get("/filter/:age",filterbyAge);
router.get("/filter",filterMethod)


module.exports=router