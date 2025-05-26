// const { Sequelize } = require("sequelize");
const express = require("express");
const app = express()
const { connectDb } = require("./config/db");
const User = require("./models/userModel");

app.use(express.json())



app.get("/", (req, res) => {
    res.send("Home Page")
})


app.post("/users", async (req, res) => {
    try {
        let user = await User.create(req.body);
        res.status(201).json({ msg: "User Created Succefully", user: user })
    }
    catch (err) {
        res.status(400).json({ msg: "Failed To Create User", err: err.message });
    }
})

app.get("/users", async (req, res) => {
    try {
        let user = await User.findAll();

        if (!user || user.length == 0) {
            res.send("user not exist")
        }
        res.status(200).json({ msg: "All users", user: user })

    }
    catch (err) {
        res.send("Something Went Wrong")

    }
})


app.get("/users/:id", async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id);
        if(!user){
            res.json({msg:"USer not Exist",err:err.message})
        }
        res.status(200).json({msg:"User Found",user:user})

    }
    catch (err) {
        res.status(500).json({msg:"Somethng Went Wrong",err:err.message})


    }


})

app.put("/users/:id",async(req,res)=>{
    try{

 let user =await User.findByPk(req.params.id);
let update =await user.update(req.body)
 res.json("Updated")
    }
    catch(err){
        res.json({msg:"Somethong went wrong",err:err.message})
    }
    
})

app.delete("/users/:id",async(req,res)=>{
    let user = await User.findByPk(req.params.id);
    let delet=  await user.destroy();
    res.send(delet)
})
User.sync()
app.listen(3000, () => {
    console.log("Listening");
})
connectDb()



