const mongoose = require("mongoose")
let createSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    subjects: [
        {
            name: {
                type: String
            },
            marks: {
                type: Number,
                minimum: 1,
                maximum: 100
            }

        }
    ],
    age:{
        type:Number,
        minimum:1
    },
    isPassed:{
        type:Boolean
    }
})
let student =mongoose.model("Student",createSchema)

module.exports =student