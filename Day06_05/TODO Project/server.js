const express = require('express')
const app = express()
require("dotenv").config();
 
const config =require("./config/database");
let port =process.env.PORT||4000;


const router =require("./routes/todos")
app.use(express.json());
app.use("/api/v1",router) 

app.get('/', (req, res) => res.send('Hello World!'))
const dbConnect =require("./config/database");
// console.log(dbConnect());
dbConnect()
app.listen( port, () => console.log(`Example app listening on port ${port}!`))