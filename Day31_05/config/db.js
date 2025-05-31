const {Sequelize} =require("sequelize");

const sequelize =new Sequelize("utitlity","root","root",{
    host:"localhost",
    dialect:"mysql"
})

const dbconnect =async()=>{
    await sequelize.authenticate();
    console.log("Db Connected");
}
// sequelize.sync({force:true})
module.exports ={sequelize,dbconnect}
