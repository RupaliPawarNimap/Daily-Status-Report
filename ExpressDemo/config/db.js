const mongoose =require("mongoose");
require("dotenv").config()
console.log(process.env.DATABASE_URL);
const dbConnect=()=>{
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log(err);
})
}
module.exports=dbConnect
 