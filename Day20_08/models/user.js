//  const mongoose =require("mongoose");
const mongoose =require("../config/db")


 const userScehma =new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true,
        unique:true
    }
 })

 module.exports=mongoose.model("User",userScehma)