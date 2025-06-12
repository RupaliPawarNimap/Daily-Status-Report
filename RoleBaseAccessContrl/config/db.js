const mongoose =require("mongoose");

const dbConnect=()=>{
    try{
const connect =mongoose.connect(process.env.MONGOOSE_URL);
console.log("Database Connected");
}catch(Err){
    console.log("Failed To Connect",err.message);
}
     
}

module.exports ={dbConnect}