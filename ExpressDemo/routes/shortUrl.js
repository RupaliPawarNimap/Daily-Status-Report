    const express =require("express");
    const router =express.Router()
    const {ShortUrl,redirectToOriginal} =require("../controllers/url")
    router.post("/shortUrl",ShortUrl);
    router.get("/getUrl/:shortId",redirectToOriginal)
    module.exports=router