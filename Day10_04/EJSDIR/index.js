const express =require("express");
const app=express();
const path=require("path")
let port=3000
app.set("views",    path.join(__dirname,"views"))
app.set("view engine","ejs")
app.get("/hello",(req,res)=>{
    res.send("hello directory")
})
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/roll",(req,res)=>{
    let dicevalue =Math.floor(Math.random()*6)+1
    res.render("rolldie.ejs",{dicevalue})
})
app.get("/api/:username",(req,res)=>{
    let {username} =req.params;
    res.send(`page is open for ${username}`)
})
app.listen(port,()=>{
console.log("Listening on port 3000");
})
 