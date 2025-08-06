const express =require("express");
const app =express();
require("dotenv").config();
const {dbConnect} =require("./config/db")
const routeUser =require("./routes/user")
const routeCourse =require("./routes/curse")
const profileroute =require("./routes/profile")
const port =process.env.PORT|| 3000;


dbConnect()
app.use(express.json());
app.use("/",routeCourse);
app.use("/",routeUser)
app.use("/",profileroute)
app.get("/",(req,res)=>{
    return res.send("Hello")
})


app.listen(port,()=>{
    console.log("Listening");
})