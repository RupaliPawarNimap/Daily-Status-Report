const express =require("express");
const app =express();
const dotenv =require("dotenv");
dotenv.config();
const {dbconnect} =require("./config/db")
const userRoute =require("./routes/userRoute")
const duserRoute =require("./routes/softDeleteRoute")
console.log(duserRoute)
let port =process.env.PORT||5000



//middlewares
app.use(express.json());
app.use("/api",userRoute)
app.use("/api",duserRoute)


//coonection
dbconnect()


//Routes
app.get("/",(req,res)=>{
    res.send("HEllo")
})

//server
app.listen(port,()=>{
    console.log("Listening",port);
})