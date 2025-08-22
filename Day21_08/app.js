const express =require("express");
const app =express();
const session  =require("express-session")
const {dbConnect} =require("./config/db")
const {passport}=require("./middleware/auth")


app.use(session({
    secret:"SECREAT",
    secure:false,
    resave:false,
    cookie:{maxAge:86000},
    saveUninitialized:true
}))
app.use(express.json())
const port =3000

console.log("DOMAIN:", process.env.APP_CLIENT_DOMAIN);
console.log("CLIENT ID:", process.env.APP_CLIENT_ID);
console.log("SECRET:", process.env.APP_CLIENT_SECRET ? "Loaded" : "Missing");


app.use(passport.initialize())
app.get("/auth/mitID",passport.authenticate("criiptoVerifyRedirect"));
app.get("/auth/mitid/callback",passport.authenticate('criiptoVerifyRedirect',{failureRedirect:"/error"},
    (req,res)=>{
        res.json(req.user)
    }
))
dbConnect();
app.get("/",(req,res)=>{
    res.json("Home Page")
})

app.listen(port,()=>{
    console.log(`All Listening on ${port}`);
})