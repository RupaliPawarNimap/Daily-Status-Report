const express =require("express");
const app =express();
require("dotenv").config();
const {dbconect} =require("./config/db")
const userRoute=require("./routes/user");
const roleRoute=require("./routes/role");
const permissionRoute =require("./routes/permission")
const rolePermission=require("./routes/rolepermission")
const forgotPassword =require("./routes/forgot")
const sendmail =require("./routes/sendmail")


const port =process.env.PORT


//middleware
app.use(express.json());
app.use("/api",userRoute);
app.use("/api",roleRoute);
app.use("/api",permissionRoute)
app.use("/api/rolepermission",rolePermission)
app.use("/api",forgotPassword)
app.use("/api",sendmail)

dbconect()
app.get("/",(req,res)=>{
    res.json({msg:"Working"})
})



//server
app.listen(port,()=>{
    console.log("Listening");
})