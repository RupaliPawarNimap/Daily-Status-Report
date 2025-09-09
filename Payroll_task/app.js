const express = require('express')
const app = express()
const port = 3000
const {dbConnect}=require("./config/db");
const roleRoute = require('./routes/roles');
const userRoute =require("./routes/user")
const permisiionRoute =require("./routes/permission")
const authRoute =require("./routes/auth")
const rolePermissionRoute =require("./routes/rolePermission")
const appointementsRoute =require("./routes/appointement")
const aptDeatils =require("./routes/appointementDeatils")
const blockRoute =require("./routes/blockuser")

const morgan =require("morgan")
app.use(morgan("dev"))
app.use(express.json());
app.use("/api",roleRoute)
app.use("/api",permisiionRoute)
app.use("/api",userRoute)
app.use("/api",rolePermissionRoute)
app.use("/api",authRoute)
app.use("/api",appointementsRoute)
app.use("/api",aptDeatils)
app.use("/api",blockRoute)
dbConnect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))