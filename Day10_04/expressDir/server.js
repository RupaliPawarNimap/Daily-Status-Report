    const express=require("express");
    const app=express();
    let port=3000
    app.listen(port,()=>{
        console.log("Server listening",port);
    })
    // app.use((req,res)=>{
    //     // console.log(req);
    //     // res.send({
    //     //     name:"Rupali",
    //     //     age:21
    //     // })
    //     let code ="<h1>hello</h1>"
    //     // res.send(code)
    //     console.log("request received");
    //     next()
    // })

    app.get("/",(req,res)=>{
        res.send("This is home page")
    })
    // app.get("/about",(req,res)=>{
    //     res.send("This is about page")
    // })
    // app.get("/help",(req,res)=>{
    //     res.send("This is help page")
    // })
    // app.get("#",(req,res)=>{
    //     res.send("This is for anything")
    // })

   