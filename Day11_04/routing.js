    const express=require("express");
    let path=require("path")
    const app=express();
    let port =3000;
    app.listen(port,()=>{
        console.log("port 3000");
    })
    app.get("/",(req,res)=>{
        res.send("This is home page")
    })
    app.set("views",    path.join(__dirname,"/views"))
    app.set("view engine","ejs");
     app.get("/ig/:username",(req,res)=>{
        let  {username} =req.params
        console.log(typeof(username));
       let follower =["Aman","Simarn","Rohan","naman"];
         res.render("instagram.ejs",{username,follower} )
     }) 

     app.get("/igg/:username",(req,res)=>{
        let  {username} =req.params
        app.use(express.static(path.join(__dirname,"public/css")))
        // app.use(express.static(path.join(__dirname,"public/js")))

        let json=require("./data.json")
        console.log(json);
        let data =json[username]


        // console.log(typeof(username));
        if(data){
            res.render("instajson.ejs",{data} )
        }
        else{
            res.render("error.ejs")
        }
       
       
     })
     app.get("/:username",(req,res)=>{
        let  {username} =req.params
        console.log(typeof(username));
       

        res.render("index.ejs",{username} )
     })

    app.get("/rolldice",(req,res)=>{
        let dicevalue=Math.floor(Math.random()*6)+1
        console.log(dicevalue);
        res.render("dice.ejs",{dicevalue})
    })
