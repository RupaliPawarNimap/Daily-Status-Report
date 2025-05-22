const express =require("express");
const router =express();
const {syncError,asyncError} =require("../controlers/error");


router.get("/sync",syncError);
router.get("/async",asyncError)


module.exports =router
