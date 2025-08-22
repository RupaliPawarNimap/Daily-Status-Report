const {Sequelize} =require("sequelize");
require("dotenv").config();
const sequelize =new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    dialect:"mysql",
    logging:false,
    host:"localhost"
})

const dbConnect =async()=>{
    try{
        sequelize.authenticate();
        console.log("DB Connected");
    }
    catch(err){
        console.log("Failed To Connect DB");
    }
}

module.exports ={sequelize,dbConnect}