const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const userRoute =require("./routes/route");
app.use("/user",userRoute)
app.use('/user',userRoute)
app.use("/user/:id",userRoute)
app.use("/user/:id",userRoute)
 

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))