const {Sequelize} =require("sequelize");



const sequelize =new Sequelize("Day12_08","root","root",{
    dialect:"mysql",
    host:"localhost",
    logging:false
})

const dbconnect =()=>{
    try{
        sequelize.authenticate();
        console.log("DB Connected");
    }
    catch(err){
        console.log("Failed To DB Connect",err);
    }
}

sequelize.sync({force:false}).then(() => {
    console.log("DB Synced");
}).catch((err)=>{
    console.log("Failed to Sync",err);
})

module.exports={sequelize,dbconnect}