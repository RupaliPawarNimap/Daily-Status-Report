const express = require('express');
const app =express();
const dotenv =require("dotenv")
const route =require("./routes/userRoute")
dotenv.config()
const {sequelize,dbconnect} =require("./config/db");


app.use(express.json());
app.use("/",route)
//connection
dbconnect()

// sequelize.sync({alter:true})

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(process.env.PORT,()=>{
    console.log("Listening",process.env.PORT);
})


