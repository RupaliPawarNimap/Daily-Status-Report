const express = require('express')
const app = express()
const http =require("http").Server(app)
const path =require("path")
const io =require("socket.io")(http)



let port =3000
app.get('/', (req, res) => {
    let options  ={
       root: path.join(__dirname)
    }
    // let filename ="index.html"
    res.sendFile(filename,options)
}

)
let users =0
io.on('connection',(socket)=>{
    console.log("Userd Connected");
    // setTimeout(() => {
    //    socket.emit("myCustomEvent",{description:"Message from server Side received"})
        
    // }, 3000);
    // socket.on("myCustomEventfromClient",(data)=>{
    //     console.log(data.description);
        
    // })
    users++
    socket.emit("newuser",{message:"Hi Welcome dear"})
    // io.sockets.emit("broadcast",{message:users+"user connected"})
    socket.broadcast.emit("newuser",{message:users+"Connected"})
    socket.on("disconnect",()=>{
        console.log("User Diconnedted");
         users--
    io.sockets.emit("broadcast",{message:users+"user diconnected"})
    })
})
http.listen(port, () => console.log(`Example app listening on port ${port}!`))