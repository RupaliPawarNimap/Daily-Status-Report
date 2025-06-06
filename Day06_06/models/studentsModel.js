const {mongoose, Schema} =require("mongoose");



const studentSchema =new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,unique:true
    },
    age:{
        type:Number,
        require:true
    }
})

const Student =mongoose.model("Student",studentSchema)
module.exports ={Student}