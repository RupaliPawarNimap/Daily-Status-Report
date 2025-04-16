const express = require('express')
const app = express();
const fs =require("fs")
const users =require("./data.json")
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => {
    console.log("The data in HTML format");

    let html = `<h1>User List</h1><ul>`;
    users.forEach(user => {
        html += `<li>${user.name}</li>`;
    });
    html += `</ul>`;

    res.send(html);
});
app.use((req,res,next)=>{
    fs.appendFile("./logFile.txt", `\n${Date.now()}:${req.ip},${req.method}:${req.path}`,(err,data)=>{
        next();
    })
})

 app.get("/api/users",(req,res)=>{
     res.setHeader("x-Myname","Rupali")
    res.json(users)
 });


 app.get("/api/users/:id",(req,res)=>{
    let id =parseInt(req.params.id);
    console.log(req.params);
    console.log(req.params.id);
    // res.send(id)
    let username =users.find(p=>p.id===id)
    if(!username){
        res.status(404).json("User not found")
    }
    res.status(200).json(username)
 });



 app.post("/api/users/",(req,res)=>{
    // res.json("On post request")
    console.log(req.body);
    let body =req.body;
    if(!body||!body.name||!body.email){
        res.status(404).json("Fill all the details")
    }
    users.push(
        {...body,id:users.length+1}
    )
    res.status(201).json({status:"Success",id:users.id})
 });


 app.patch("/api/users/:id",(req,res)=>{
    // res.json("On patch request")
        let id =parseInt(req.params.id);
        let user =users.find(p=>p.id===id);
        let {name,email} =req.body
        console.log(name,email);
        if(name)  user.name=name;
        if(email) user.email=email
        
        res.json({status:"Satus patch updated",id:id})               
 })

 app.put("/api/users/:id",(req,res)=>{
    let id =parseInt(req.params.id);
    
    let user =users.find((p)=>p.id===id);
    if(!user){
        res.status(404).json("USer not found")
    }
    console.log(user);
 user.name=req.body.name ||users.name;
 user.email=req.body.email||users.email
 console.log(user.name,user.email);
   
    res.json({msg:"Put request",id:id});
 })



 app.delete("/api/users/:id",(req,res)=>{
     let id =parseInt(req.params.id)
     console.log(id);
     let index=users.filter((p)=>p.id===id);
     if(!index){
        res.status(400).json("USer nt found")
     }
     console.log(index);
     let deletedUSer=users.splice(index,1)
     res.json(deletedUSer)
  });
 
 
    // app.get("/users/:id",(req,res)=>{

    // })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))