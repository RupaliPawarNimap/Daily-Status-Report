const express =require("express");
const app=express();
const {dbconnect, sequelize} =require("./config/db");
const route =require("./routes/userRoute") 
const dRute =require("./routes/deleletRoute")
const model =require("./models/association")

//middleware
app.use(express.json());
app.use("/api",route)
app.use("/api/",dRute)



//connection
dbconnect()
sequelize.sync({alter:true}).then(()=>{
    console.log("Db synced");
}).catch((err) => {
    console.log("Failed To cnnectcr",err.message);
})

//routes
app.get("/",(req,res)=>{
    res.send("HEllo World")
})
// sequelize.sync({force:true})



//server cretion 
app.listen(process.env.PORT,()=>{
    console.log("Listening");
})