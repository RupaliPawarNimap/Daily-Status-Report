const express = require('express')
const route =require("./routes/authroute")
const app = express()
require("dotenv").config()
const port = process.env.PORT||3000
app.use(express.json());
app.use("/api",route)
const dbconnect = require('./config/db')
dbconnect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))