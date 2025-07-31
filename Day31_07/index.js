const express =require("express");
const app =express();
const session =require("express-session");

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:"mysecreat",
    cookie:{maxAge:1000*60*60}
}))

const port =3000;

app.get("/",(req,res)=>{
    if(req.session.username){
        return res.send("username exist in Session")
    }
    else{
        return res.send("Session not exist")
    }
})

app.get("/set-session",(req,res)=>{
    req.session.username ="Rupali"
    res.send("Session Set successfully")
})

app.get("/get-session",(req,res)=>{
      if(req.session.username){
        return res.send(`Session found Successfully :${req.session.username}`);
    }
    else{
        return res.send("Session not exist")
    }
})

app.get("/destroy",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send("Failed To delete Session")
        }
        else{
            return res.status(200).json({msg:"Session deleted Succesfuly"})
        }
    })
})


app.listen(port,()=>{
    console.log("working");
})
 
 