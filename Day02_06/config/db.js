const {Sequelize} =require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize("Day02_06", process.env.USER, process.env.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
});


const dbconnect =async()=>{
  await  sequelize.authenticate();
    console.log("Db Connected");
}
sequelize.sync();
sequelize.sync({force:false})


module.exports ={dbconnect,sequelize}