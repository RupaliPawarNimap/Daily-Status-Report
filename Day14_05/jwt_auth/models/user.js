const mongoose =require("mongoose");
const {isEmail}=require("validator")
const signup =new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[isEmail,"Enter valid Email"]
    },
    password:{
        type:String,
        required:true,
        minlength:6
         
    }
})
module.exports =mongoose.model("User",signup)