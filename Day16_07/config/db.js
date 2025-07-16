const {Sequelize} =require("sequelize")


const sequelize =new Sequelize("Day16_07","root","root",{
    host:"localhost",
    dialect:"mysql"
})

const dbConnect =async()=>{
    try{
         sequelize.authenticate();
    console.log("Db Connectd");
    }
    catch{
        console.log("Failed To cnnect");
    }
}

sequelize.sync({force:false}).then(()=>{
    console.log("Db synced");
}).catch((err)=>{
    console.log("Failed To sync Db");
})
module.exports ={dbConnect,sequelize}