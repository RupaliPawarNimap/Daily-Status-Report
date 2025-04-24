const express = require("express");
const app = express();
let port = 3000;

app.use((req, res, next) => {
    console.log(`${req.url}  Path is : ${req.path} ,method is:   ${req.method}  ,Date is ${new Date().toISOString()} ${req.body}`);
    next()
})
app.use("/number/:id", (req, res, next) => {
    let id = req.params.id
    if (isNaN(id)) {
        res.status(400).send("Invalid id")
    }
    else {

        req.isEven = id % 2 === 0
        console.log(`ID ${id} is ${req.isEven ? "Even" : "Odd "}`);
    }


    next()

})

app.use("/dashboard",(req,res,next)=>{
    let token =req.query.token;
    console.log(token);
   
    if(token=="secret123") {
        // console.log("Correct token");
        next();
         
      
    }
    else{
         res.status(400).send("Invalid token")
    }

})

app.get("/dashboard",(req,res)=>{
   res.send("Welcome on Dashboard")
})

app.get("/number/:id", (req, res) => {
    let id = req.params.id
    let msg = req.isEven ? `${id} is Even` : `${id} is Odd`
    res.send(msg)
})
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log("Listening on port ", port);
})