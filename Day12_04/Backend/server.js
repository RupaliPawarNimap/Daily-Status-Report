const express =require("express");
const app =express();
let port =3000;
app.listen(port,()=>{
    console.log("Port listen on 3000");   
})
// app.get("/",(req,res)=>{
//     res.send("This is the home page ")
// })
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/register",(req,res)=>{
    let {username} =req.body;
    
    if(!username){
        res.status(404).send("error:Cannot get the username")
    }
    console.log(username);
    res.send(`this is Standard get request ${username}` )
    // res.send(username)
})
app.post("/register",(req,res)=>{
    let {username,password} =req.body;
    if(!username){
        res.status(404).send("error:Cannot get the username")
    }
    console.log(username,password);
    // res.json(username,password)
    res.send(`this is Standard Post request ${username}` )

})