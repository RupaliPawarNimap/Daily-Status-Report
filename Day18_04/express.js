let express =require("express");
let app =express();
let port =3000;

app.get("/",(req,res)=>{
    res.send("I am on home page")
})
app.get("/form",(req,res)=>{
    res.send("I am on about page")
})
app.listen(port,()=>{
    console.log("Listening");
})