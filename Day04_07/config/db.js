const {Sequelize} = require("sequelize");


const sequelize =new Sequelize("ReviseDB","root","root",{
    host:"localhost",
    dialect:"mysql"
})

try{
sequelize.authenticate(); 
console.log("Connection Established Successfully");

}
catch(err){
    console.log("Failed To Connect");
}
 
sequelize.sync({alter:true})


module.exports ={sequelize}