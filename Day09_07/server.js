const express =require("express");
const app =express();
require("dotenv").config();
const {dbconnect} =require("./config/db")
const route =require("./routes/roleroutes")
const uroute =require("./routes/userRoute");



let port =process.env.PORT||4000
app.use(express.json())
app.use("/api",route);
app.use("/api",uroute)
dbconnect()
app.get("/",(req,res)=>{
    res.json( {msg:"Hello World"})
})
app.listen(port,()=>{
    console.log("Listening")
})