const express = require('express')
const {logginig} =require("./middleware")
const app = express()
app.use(logginig)

app.use((req,res,next)=>{
    console.log("Logging...!");
    next()
})
app.use((req,res,next)=>{
    console.log("Authenticating...!");
    next()
})
const port = process.env.PORT||3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))