const mongoose = require("mongoose");


let todoScehma = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50

    },
    description: {
        type: String,
        maxLength: 50,
        required: true
    },
    createtedAt: {
        type: Date,
        required:true,  
        default: Date.now()

    },
    updatedAt: {
        type: Date,
        required:true,  
        default: Date.now()

    }


})
module.exports = mongoose.model("Todo", todoScehma)