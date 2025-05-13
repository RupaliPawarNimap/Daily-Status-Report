const express = require('express')
const cookieParser =require("cookie-parser")
const app = express()
const urlRouter =require("./routes/shortUrl")
require("dotenv").config()
const port = process.env.PORT||3000
const route=require("./routes/signupRoute");
app.use(express.json());
app.use(cookieParser())
app.use("/api",route);
app.use("/api/url",urlRouter)
 

 
const dbConnect =require("./config/db");
 
dbConnect()

app.get("/normal",(req,res)=>{
    res.cookie("data","Rupali");
    res.send("done")
})
app.get("/read",(req,res)=>{
    console.log(req.cookies);
    res.send("read again")
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))