const {Sequelize} =require("sequelize");

const sequelize =new Sequelize("learn","root","root",{
    host:"localhost",
    dialect:"mysql"
})
const db =()=>{
    sequelize.authenticate()
    console.log("Connected");
}
db()
 

module.exports ={sequelize}