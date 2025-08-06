const {Sequelize} =require("sequelize");
require("dotenv").config();


const sequelize =new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    dialect:"mysql",
    host:"localhost",
    logging:false

})

const dbConnect =async()=>{
    try{
        await sequelize.authenticate();
        console.log("DB Connectd");
    }
    catch(err){
        console.log("Failed To DB Connect",err);
    }
}


module.exports ={sequelize,dbConnect}
