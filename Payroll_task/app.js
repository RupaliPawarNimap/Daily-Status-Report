Object.keys(require.cache).forEach(key => delete require.cache[key]);
const express = require('express')
const app = express()
const port = 3000
const path =require("path")
const { swaggerUi, swaggerSpec } = require("./config/swagger");
const {dbConnect}=require("./config/db");
const roleRoute = require('./routes/roles');
const userRoute =require("./routes/user")
const permisiionRoute =require("./routes/permission")
const authRoute =require("./routes/auth")
const rolePermissionRoute =require("./routes/rolePermission")
const appointementsRoute =require("./routes/appointement")
const aptDeatils=require("./routes/appointementAttendees")
const blockRoute =require("./routes/blockuser")
const bulkuploadRoute =require("./routes/bulkupload")
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
app.use("/api",bulkuploadRoute)
app.use("/api",blockRoute)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
dbConnect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))