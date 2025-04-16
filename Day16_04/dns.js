// const dns=require("dns");
// dns.lookup('w3schools.com',(err,addreass,family)=>{
//     console.log("the addreass",addreass,family);
// })

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/winter",(req,res)=>{
    res.send("I love winter")
})
app.get("/summer",(req,res)=>{
    // console.log("I love summer");
    res.send("I love summer")
})
console.log(app.m);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))