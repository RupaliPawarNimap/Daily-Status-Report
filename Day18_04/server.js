// require('dotenv').config();
console.log(process.env.port);
const express = require('express')
const app = express()
const port = process.env.port;
console.log(port);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))