const express=require("express");
const app =express();
const session =require("express-session")
const authRoute =require("./routes/user")
const {dbConnect} =require("./config/db");
const passport = require("passport");


const port =3000;
app.use(passport.initialize())
app.use(express.json());
app.use(session({
    resave:false,
    saveUninitialized:true,
   secret:"MYSECREAT",
    cookie:{maxAge:86000}
}))
app.use("/auth",authRoute)
dbConnect();
app.get("/",(req,res)=>{
    res.send("woking")
})


app.listen(port,()=>{
    console.log(`App Listing on ${port}`);
})