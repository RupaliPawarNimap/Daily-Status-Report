const express =require("express");
const app =express();
const dbconnect=require("./config/db");
const route =require("./routes/userRoute")


const port = 3000;
app.use(express.json());
app.use("/",route)

dbconnect;
app.get("/" ,(req,res)=>{
    res.send("Hello")
})
app.listen(port,(req,res)=>{
    console.log("Listening");
})