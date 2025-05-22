const express =require("express");
const app =express();
const {sequelize} =require("./config/db")
const User =require("./models/usermode")
const {handleSync,handleAsync} =require("./handlers/handleError");
 
app.use((err,req,res,next)=>{
    console.log("Work for each  route");
    console.log(err.message);
    next();
})
app.use(express.json())
sequelize.sync()
.then(() => {
    console.log("Database Connected Successfully");
}).catch(() => {
    console.log("Failed Database Cnnection");
})

app.post("/users",async(req,res)=>{
    let {name,email} =req.body;
    console.log(name,email);

     try{
        let user =await User.create({name:name,email:email});
        res.status(200).json(user)
     }
     catch(err){
        console.log("Failed to create user",err.message);
        res.status(400).json("Unable to create user")
     }
});
app.get("/users",async(req,res)=>{
    let users =await User.findAll();
    if(users.length==0){
        res.status(400).json({msg:"No any user in database"})
    }
    else{
        res.status(200).json({msg:"Fetched Succesully",Users:users})
    }
})



handleAsync();
handleSync();
const route =require("./routes/erorRoute");
 

 

 
app.use("/",route)

app.get("/",(req,res)=>{
    res.send("Hello World!")
})
 

app.get("/syn",(req,res)=>{
    throw new Error("Synchrnous Error")
})
 

app.listen(3000,()=>{
    console.log("Listening");
});

 