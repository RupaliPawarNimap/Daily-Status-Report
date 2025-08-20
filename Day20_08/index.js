const express = require('express')
const route = require('./routes/user')
const app = express()
const port = 3000

app.use(express.json())
app.use("/api",route)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))