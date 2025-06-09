const express =require("express");
const app =express();
require("dotenv").config();
const userRoute =require("./routes/userRoute")
const roleRoute =require("./routes/roleRoutes")
const { dbconnet } =require("./config/db")


let port =process.env.PORT||5000


app.use(express.json())
app.use("/api",userRoute);
app.use("/api",roleRoute)
dbconnet();



app.get("/",(req,res)=>{
    res.send("Working")
})



app.listen(port ,()=>{
    console.log("listeing");
})