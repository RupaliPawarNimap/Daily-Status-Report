
const express = require("express");
const app = express()
console.log("start");

const { userLogger } = require("./middlewares/logger")
const route = require("./routes/login");
const userRoute = require("./routes/userRoute")


app.use(express.json())
app.use(userLogger)
app.use("/", logger, route);
app.use("/", userRoute)

function logger(req, res, next) {
    console.log("works fr erveryone");
    next()
}

const { multiply, add } = require("./module/math");
console.log(multiply(1, 2));
console.log(add(1, 2));


process.stdin.on('data', (input) => {
    const name = input.toString().trim();
    process.stdout.write(`Hello, ${name}!\n`);
    process.exit(0);
});



app.get("/", (req, res) => {
    res.send("home page")
})
app.post("/", (req, res) => {
    res.send("middleware")
})

app.listen(3000, () => {
    console.log("Listening");
})
process.stdin.resume()