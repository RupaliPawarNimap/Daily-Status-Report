const express=require("express");
const router =express.Router();
const {authservice}=require("../controllers/user")
const {passport}=require("../middlewares/passport");


router.get("/mitid",passport.authenticate("criipto",{session:false}));
router.get("/mitid/callback",passport.authenticate("criipto",{session:false,failureRedirect:"/"}),authservice);

module.exports=router