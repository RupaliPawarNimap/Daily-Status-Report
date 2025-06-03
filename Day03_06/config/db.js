const {Sequelize} =require("sequelize");
require("dotenv").config()


const sequelize =new Sequelize("Day03_06",process.env.USER,process.env.PASSWORD,{
    host:"localhost",
    dialect:"mysql"
})

const dbconnect =async()=>{
   await sequelize.authenticate();
    console.log("Db Connected");
}

module.exports ={sequelize,dbconnect}
