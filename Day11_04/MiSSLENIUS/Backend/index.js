const express =require("express");
const app =express();
let port =8080;

app.get("/register",(req,res)=>{
    let {username,pass}=req.query
    res.send(  `Welcome on the page ${username}` );

})
app.post("/register",(req,res)=>{
    res.send("satndard post requets")
})
app.listen(port,()=>{
    console.log("App listenng on port 3000");
})