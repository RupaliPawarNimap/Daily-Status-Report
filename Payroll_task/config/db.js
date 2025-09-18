const {Sequelize} =require("sequelize");
require("dotenv").config();



const sequelize=new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
     host:"localhost",
    dialect:"mysql",
    logging:false
    
}

)

const dbConnect =async()=>{
    try{
await  sequelize.authenticate();
console.log("DB Connected");

    }
    catch(err){
        console.log("Failed To DB Connect",err);
    }
}

// sequelize.sync({alter:false}).then(()=>{
//     console.log("DB Synced");
// }).catch((err)=>{
//     console.log("Failed To Sync",err);
// })


module.exports={dbConnect,sequelize}