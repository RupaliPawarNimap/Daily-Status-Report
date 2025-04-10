const express=require("express");
const app=express();
let port=8080;
app.listen(port,()=>{
    console.log("app listening on port 8080");
})
app.get("/",(req,res)=>{
    res.send("Ur on home page")
    console.log("received");
})
app.get("/:username/:id",(req,res)=>{
    const{username,id}=req.params;

    let data=`<h1>welcome to the page ${username}</h1>`
    res.send( data)
    // con
    // sole.log("err");
})

app.get("/search",(req,res)=>{
    let {q} =req.query;
    if(!q){
        res.send("<h1>Nothing is serachedd</h1>")
    }res.send(`<h1>serch reasult for query ${q}</h1>`)
})