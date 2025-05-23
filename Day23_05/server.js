const express =require("express");
const app =express();
const {logger} =require("./middlewares/logger");
const {error} =require("./middlewares/errorHanler")
const route =require("./routes/router");

app.use(express.json());
app.use(error);
app.use(logger);


app.get("/",(req,res)=>{

    res.send("Hello World")
});

app.use("/",route)


app.listen(3000,()=>{
    console.log("Listening");
})
