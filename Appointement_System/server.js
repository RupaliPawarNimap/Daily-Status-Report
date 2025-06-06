const express =require("express");
const app =express();
require("dotenv").config();
const { dbconnet } =require("./config/db")


let port =process.env.PORT||5000


app.use(express.json())
dbconnet();



app.get("/",(req,res)=>{
    res.send("Working")
})



app.listen(port ,()=>{
    console.log("listeing");
})