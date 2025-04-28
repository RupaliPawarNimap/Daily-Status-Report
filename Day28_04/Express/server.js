const express =require("express");
const app =express();
let port =3000;
app.use(express.json())
let id =1   
let user = [];
app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.get("/user",(req,res)=>{
    res.status(200).json(user)
})
app.get("/user/:id",(req,res)=>{
    let id =req.params.id;
    let index =user.find(p=>p.id==id);
    if(!index){
        res.status(400).json("User not Found");
    }
    else{
        res.send(index)
    }
    
})


app.delete("/user/:id",(req,res)=>{
    let id =req.params.id;
    let match =user.find(p=>p.id==id);
    if(!match){
        res.status(400).json("User not Found");
    }
    else{
        let deletedUser = user.splice(match,1);
        res.json(deletedUser)
    }
   
})
app.post("/user",(req,res)=>{
    let data =req.body;
    let newdata ={id:id++,...data}
    user.push(newdata )
    res.json(data)
   
})

    app.put("/user/:id",(req,res)=>{
        let body =req.body;
        let id =req.params.id
        let index =user.findIndex(p=>p.id==id)
        if(body.name){
                user[index].name =body.name
        }
        res.json(user[index])
         
        
    })
 
app.listen(port,()=>{
    console.log("Listening");
})