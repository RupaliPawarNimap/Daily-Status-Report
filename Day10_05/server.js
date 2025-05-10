const { error } = require("console");
const express =require("express");
const app =express();
const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected");
}).catch((error)=>{
    console.log("error",error);
})
let schema =new mongoose.Schema({
    name:{
        type:String
    },
    complete:{
        type:Boolean
    },
    description:{
        type:String,
        default:"This is default string"
    }
})
schema.methods.update=function(){
    this.complete =!this.complete
    return this.save()  
}
schema.methods.add=function(){
    this.description ="Hello"
    return this.save()
}
let User =mongoose.model("user",schema)

async function run(){
    let savedata = await User.create({"name":"Rupali",complete:true});
    await savedata.update()
    await savedata.add()
    console.log(savedata)
}
 
 run()
 