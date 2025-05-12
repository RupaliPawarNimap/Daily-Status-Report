// const { log } = require("console")
const mongoose = require("mongoose")
require("dotenv").config()
 

const connectDb  =() =>{
    console.log(process.env.DATABASE_URL);
    
mongoose.connect(process.env.DATABASE_URL).then(() => {
    
    console.log("connected");
    
}).catch((err) => {
    console.log(err);
    
})
}
connectDb()

// module.exports = connectDb