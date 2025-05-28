const express=require("express");
const app =express();
const dotenv =require("dotenv");
const {dbConnect, sequelize} =require("./config/db")
const route =require("./routes/employeeRoute")
const filterRoute =require("./routes/filterRoute")
const paginate =require("./routes/paginatRoute")
dotenv.config()
const port =process.env.PORT;




//middlewares
app.use(express.json());
 


// connection DB
dbConnect();
sequelize.sync();
// User.sync({force:true});
// User.sync({alter:true})
 console.log(sequelize.models.User);

// routes
app.get("/",(req,res)=>{
    res.json("Hello World")
})
app.use("/",route)
app.use("/",filterRoute)
app.use("/",paginate)

app.listen(port,()=>{
    console.log("Listening on",port);
})