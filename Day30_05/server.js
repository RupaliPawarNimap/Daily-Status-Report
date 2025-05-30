const express = require('express');
const app =express();
const dotenv =require("dotenv")
const {sequelize,dbconnect} =require("./config/db");
const route =require("./routes/productRoute")
const filterRoute =require("./routes/filteringRoute")
//Port
let port =process.env.PORT||3000


//Middlewares
app.use(express.json())
app.use("/",route)
app.use("/",filterRoute)
sequelize.sync()
sequelize.sync({force:false})
sequelize.sync({alter:true})

//Connection
dbconnect()



//Routes
app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log("Listening",port);
})