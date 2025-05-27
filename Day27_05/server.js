const express =require("express");
const app =express();
const {sequelize,dbconnect} =require("./config/db");
const User =require("./models/userModel")
const route =require("./routes/userRoute");
app.use(express.json())


dbconnect()
 
 app.use("/",route)
app.get("/",(req,res)=>{
    res.json("Hello")
})
User.sync()
User.sync({alter:true})
app.listen(3000,()=>{
    console.log("Listening");
})