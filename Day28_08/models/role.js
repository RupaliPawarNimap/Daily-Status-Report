 const mongoose =require("mongoose");

 const Role =new mongoose.Schema({
    role_name:{
        type:String,
        required:true
    }
    ,
    description:{
        type:String,

    }
 })

 module.exports =mongoose.model("Role",Role)