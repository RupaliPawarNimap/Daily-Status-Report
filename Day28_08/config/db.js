const mongoose =require("mongoose");

require("dotenv").config();
// console.log(process.env.DB_URL);

 const dbConnect =async()=>{
    try{
mongoose.connect( process.env.DB_URL)
    }catch(err){
console.log("Faied To DB Connect",err);
    }
 }
 dbConnect().then(()=>{
    console.log("DB Connected Successfuly");
 })

 module.exports ={dbConnect}
 