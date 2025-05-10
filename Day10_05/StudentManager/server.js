const express = require('express');
const dbConnect = require('./config/db');
const app = express()
require("dotenv").config();
const route =require("./routes/create");
app.use(express.json())
app.use("/api",route)

const port = process.env.PORT||3000
 
 
 dbConnect()
  
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))