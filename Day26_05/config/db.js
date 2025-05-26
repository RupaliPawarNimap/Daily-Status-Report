const {Sequelize} =require("sequelize");

const sequelize =new Sequelize("testdb","root","root",{
    host:"localhost",
    dialect:"mysql"
})

const connectDb =async()=>{
    await sequelize.authenticate();
    console.log("Conneted");
}
module.exports={sequelize,connectDb}