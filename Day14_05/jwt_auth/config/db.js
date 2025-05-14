const mongoose =require("mongoose");
const dbconnect =()=>{
    mongoose.connect(process.env.DATABASE_URL,{

    }).then((res)=>{
        console.log("Mongodb Connected");
    }).catch((err)=>{
        console.log("error occured",err.message);
    })
}

module.exports =dbconnect