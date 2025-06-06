 const express = require('express');
 const app =express();
 require("dotenv").config();
 const route =require("./routes/studentRoute")
 const { dbConnect } =require("./config/db")

let port =process.env.PORT




app.use(express.json())
app.use("/api",route) 


dbConnect()



app.get("/",(req,res)=>{
    res.send("Working")
})


app.listen(port,()=>{
    console.log("Listening",3000);
})


 