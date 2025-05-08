require("dotenv").config();
const express = require('express')
const app = express();
const postRouter =require("./routes/postroute")
const dummyroute =require("./routes/dummyroute")
app.use(express.json());
app.use("/api",dummyroute)
app.use("/api",postRouter)
const port = process.env.PORT||3000


app.get('/', (req, res) => res.send('Hello World!'));
const dbConnect =require("./config/db");
dbConnect()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))