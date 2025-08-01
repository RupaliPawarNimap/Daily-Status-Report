const express =require("express");
const app =express();
const route =require("./routes/user")
const {dbConnect} =require("./config/db")
const session=require("express-session");
const { checkLogin } = require("./middlewares/checklogin");
const cookieParser =require("cookie-parser")


app.use(cookieParser("mysecret"))

app.use(express.json())
app.use(session({
    secret:"Mysecret",
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:10*60*60}
}))

app.use("/api",route,)

dbConnect()
app.get("/",checkLogin,(req,res)=>{
    res.json({msg:"Home Page"})
})

app.post("/set-cookie",(req,res)=>{
    let {key,val} =req.body
    res.cookie(key,val,{
        maxAge:900000,
        secure:false,
        signed:true
 })
//  console.log(req.cookies.key);
 res.status(200).json({msg:"Cookie Set Successfully", name:req.cookies.name})
})

app.get("/get-cookie",(req,res)=>{
    let cookies =(res.signedCookies)
    if(cookies){
return res.json({msg:"Cookies Fetched",cookies:cookies})
    }
    else{
        return res.status(400).json({msg:"failed"})
    }
     
})

app.get("/destroy",(req,res)=>{
    let resu =res.clearCookie("name")
    // console.log(res.cookie.);
    console.log(resu);
    return res.status(200).json({msg:"Cookie deletd succssfully"})
})

app.listen(3000,()=>{
    console.log("Working");
})