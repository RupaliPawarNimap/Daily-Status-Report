const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT
// const connectDb = require("./config/db")
// console.log(process.env.DATABASE_URL);

// connectDb()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))