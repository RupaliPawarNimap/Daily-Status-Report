 const {Sequelize} =require("sequelize")
require("dotenv").config();

const  sequelize =new Sequelize (process.env.DB_NAME,process.env.DB_PSD,process.env.DB_USERNAME,{
    host:"localhost",
    dialect:"mysql"
})

const dbconnect =()=>{
    try{
        sequelize.authenticate();
        console.log("Db Connected");
    }
    catch(err){
        console.log("Failed To Connect");
    }
}
// sequelize.sync({force:true});

module.exports ={sequelize,dbconnect}