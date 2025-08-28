const express = require('express');
const { dbConnect } = require('./config/db');
const app = express()
require("dotenv").config();
const userRoute =require("./routes/user")
const roleRoute=require("./routes/role")

const port = 3000
 

dbConnect()
app.use(express.json())
 app.use("/api",userRoute)
 app.use("/api",roleRoute)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))