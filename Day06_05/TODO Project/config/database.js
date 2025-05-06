 
const mongoose =require("mongoose")
require("dotenv").config()
let envConnect =()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        
    }).then(()=>{
        console.log("MongoDb connected");
    }).catch((err)=>{
        console.log("Connection Failed");
        console.log(err);
        process.exit(1)
    })

}
module.exports =envConnect;
 
