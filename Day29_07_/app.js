const  express = require('express')
const app = express()
const port = 3000
const {dbConnect} =require("./config/db")

dbConnect()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))