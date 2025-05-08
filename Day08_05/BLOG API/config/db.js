const { error } = require("console");
const mongoose =require("mongoose");
require("dotenv").config()
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((err)=>{
        console.log("Failed To Connect");
        console.error(error.message);
    })
}
module.exports =dbConnect