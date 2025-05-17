const express =require("express");
const app =express();
const {nanoid} =require("nanoid")

const cokie=require("cookie-parser")
const router =require("./routes/feedback");
const logger = require("./middleware/reqloggr");
const reqAllData = require("./middleware/reqAllData");



app.use(express.json());
app.use("/api",logger);
//  app.use(cokie)
app.use(reqAllData);
 const longurlobj ={}
 
app.post("/shortUrl",(req,res)=>{

    const {long} =req.body
    const shorturl =nanoid(6);
    longurlobj[shorturl] =long;
    res.json({
        shorturl:`${shorturl}`,
        original:long
    }) 
    
})

app.get("/:shortId",(req,res)=>{
    let id =longurlobj[req.params.shortId];
    console.log("This is id",id);
    if(id){
        res.redirect(id)
    }
    else{
        res.send("unable to get url")
    }
})






app.use("/api",router)

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.listen(3000,()=>{
    console.log("Listening on 3000 port");
})