const express =require("express");
const app =express();
require("dotenv").config();
const userRoute =require("./routes/userRoute")
const roleRoute =require("./routes/roleRoutes")
const appointementsRoute =require("./routes/appointement");
const appointementDetailsRoute =require("./routes/aptDetails");
const blockeUSer =require("./routes/blockedRoute")
const { dbconnet } =require("./config/db")


let port =process.env.PORT||5000


app.use(express.json())
app.use("/api",userRoute);
app.use("/api",roleRoute);
app.use("/api",appointementsRoute);
app.use("/api",appointementDetailsRoute)
app.use("/api",blockeUSer)
dbconnet();



app.get("/",(req,res)=>{
    res.send("Working")
})






app.listen(port ,()=>{
    console.log("listeing");
})