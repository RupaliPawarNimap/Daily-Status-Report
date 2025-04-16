 const express = require('express')
const { get } = require('http')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/about",(req,res)=>{
    // res.send("I am on About page"+"name " + req.query.name +"age is" +req.query.age)
    res.send(`heloo ${req.query.name}`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))