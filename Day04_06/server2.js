const express = require('express')
const app = express()
const http =require("http").createServer(app)
const io =require("socket.io")(http)
const path=require("path")
const port = 3000

app.get('/', (req, res) => {
    let options ={
        root:path.join(__dirname)
    }
    let filename="index2.html";
    res.sendFile(filename,options)
})
let cnsp =io.of("/custome_name")
 cnsp.on("connection",(socket)=>{
        console.log("User Connected");
        setTimeout(()=>{
             socket.emit("myevent",{msg:"This is message from server"})
        },3000)
        socket.on("disconnect",()=>{
            console.log("User Disconnected");
        })
    })



http.listen(port, () => console.log(`Example app listening on port ${port}!`))