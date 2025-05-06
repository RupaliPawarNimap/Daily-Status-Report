const express = require('express')
const app = express()
const port = 3000
const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true

} ).then(()=>{
    console.log("Connection Succesfful");
}).catch(()=>{
    console.log("Failed to connect");
})

 
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
