
var mongoose = require('mongoose');

require("dotenv").config();
const dbConnect =async ()=>{
    try{
mongoose.connect(process.env.DB_URL,{
    useUnifiedTopology:true,
    
})
console.log("DB Connected");
    }
    catch(err){
console.log("Failed To Connect");
    }
}

dbConnect()
module.exports =mongoose