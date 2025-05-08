const express =require("express");
const app =express();
const route =require("./routes/createRoute")
app.use(express.json());
app.use("/api/users",route)
require("dotenv").config()
let port =process.env.PORT ||3000
 
app.get("/",(req,res)=>{
    console.log("Hello World!")
    res.send("Hello world")
})
let database =require("./config/database");
database();
app.listen(port,()=>{
    console.log(`App listening on ${port}`);
})