const mongoose =require("mongoose");
// const { schema, applyTimestamps } = require("./user");

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    originalUrl:{
        type:String ,
        required:true
    },
    
}
,{timestamps:true}
)
module.exports=mongoose.model("Url",urlSchema)