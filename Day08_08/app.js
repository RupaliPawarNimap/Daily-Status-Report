const { dbconnect } = require('./config/db')
const roleRoute =require("./routes/role");
const userRoute =require("./routes/user")
const authRoute =require("./routes/auth")
const permissionRoute =require("./routes/permission")
const rolePermsiion =require("./routes/rolePermission")
const morgan =require("morgan")

express = require('express')
const app = express()
const port = 3000

app.use(morgan("dev"))
app.use(express.json());
app.use("/api",roleRoute)
app.use("/api",userRoute);
app.use("/api",authRoute)
app.use('/api',permissionRoute)
app.use("/api",rolePermsiion)

dbconnect();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))