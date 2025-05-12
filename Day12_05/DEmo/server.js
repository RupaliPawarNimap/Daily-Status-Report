const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT
console.log(port);

const connectDb = require("./config/db")
connectDb()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))