const express =require("express");
const app =express();
const {dbConnect} =require("./config/db")
const morgan =require("morgan")
const route =require("./routes/file")
const {Worker} =require("worker_threads");



app.use(morgan('tiny'))
app.use("/api",route)
const port =3000
dbConnect();
app.get("/",(req,res)=>{
    res.send("Working")
})

app.get("/worker",(req,res)=>{
    let worker =new Worker("./controller/worker.js");
    worker.on("message",(sum)=>{
        console.log("result",sum);
        res.send(sum)
    }),
    worker.on("online",()=>{
        console.log("Worker is online");
    }),
    worker.on("close",()=>{
        console.log("woker closed");
    }),
    worker.on("messageerror",(err)=>{
        console.log("err",err.message);
    })
    worker.on("exit",(err)=>{
        console.log(err.message);
    })  
     
})

app.listen(port,()=>{
    console.log("Listening on port 3000");
})