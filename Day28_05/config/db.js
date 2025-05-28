const { Sequelize } = require("sequelize");


const sequelize =new Sequelize("employees_db","root","root",{
    host:"localhost",
    dialect:"mysql"
})

const dbConnect =async()=>{
   await sequelize.authenticate();
    console.log("DB Connected");
}

module.exports ={sequelize,dbConnect}

 