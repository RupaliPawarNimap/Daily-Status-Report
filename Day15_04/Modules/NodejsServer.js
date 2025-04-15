const express = require('express')
const app = express()
let fs =require("fs");
const port = 3000
function logger(req,res,next){
    console.log(`${new Date().toLocaleDateString()} : ${req.method} :${req.originalUrl}`);
    next()
}
app.use(logger)
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))