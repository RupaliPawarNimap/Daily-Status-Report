const{Sequelize} =require("sequelize");
require("dotenv").config()

const sequelize =new Sequelize("Day08_08",process.env.USER,process.env.PASS,{
    dialect:"mysql",
    logging:false,
    host:"localhost"
})

const dbconnect =()=>{
    try{
        sequelize.authenticate();
        console.log("DB Connected");
    }
    catch(err){
        console.log("Failed To Connect");
    }
}
sequelize.sync({alter:false}).then(()=>{
    console.log("DB Synced");
}).catch((err)=>{
    console.log("Failed To Sync",err);
})

module.exports ={sequelize,dbconnect}