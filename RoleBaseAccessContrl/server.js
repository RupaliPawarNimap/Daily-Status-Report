const express = require('express')
const app = express()
const dotenv =require("dotenv").config();
const {dbConnect} =require("./config/db")
const route =require("./routes/authroutes");
const userRoute =require("./routes/userRoutes")
const port = process.env.PORT||5000

app.use(express.json())


app.use("/",route)
app.use("/",userRoute)
dbConnect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))