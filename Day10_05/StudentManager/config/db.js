const mongoose = require("mongoose");
require("dotenv").config()

console.log(process.env.DATABSE_URL);

const dbConnect = () => {
    mongoose.connect(process.env.DATABSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.log("error",err);
    })
}
//  dbConnect()
module.exports =dbConnect