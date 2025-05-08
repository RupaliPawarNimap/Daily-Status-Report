const mongoose =require("mongoose")
 
require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        
    })
    .then(()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.error(err);
        console.log("Failed Connection");
        process.exit(1)
    })
}
module.exports =dbConnect;