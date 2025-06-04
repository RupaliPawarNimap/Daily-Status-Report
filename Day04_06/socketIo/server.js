const express = require('express')
const app = express()
const  http =require("http").createServer(app)
const io =require("socket.io")(http)
const path =require("path")
const port = 3000


app.get('/', (req, res) =>{
    let option={
        root:path.join(__dirname)
    }
   res.sendFile("index.html",option)

})
io.on("connection",(socket)=>{
    console.log("Connected User");
    socket.emit("default",{msg:"This is Default Event"})

})
let admin =io.of("/admin");
admin.on("connection",(user)=>{
     console.log("Connected User as admin");
    user.emit("welcome",{msg:"This is admin Event"})
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))