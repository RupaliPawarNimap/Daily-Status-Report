const express =require("express");
const app=express()
let path=require("path")
let port =8080;
app.listen(port,()=>{
    console.log("Port listen oon 8080");
})
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
     app.get("/",(req,res)=>{
        res.send("This is home page")
     })
app.get("/ig/:username",(req,res)=>{
    let json =require("./data.json");
    let {username} =req.params    
    let data =json[username]
    console.log(data);
    if(data){
        res.render("instagram.ejs", {data})
    }
    else{
        res.render("instagram.ejs")
    }
})