const {Sequelize} =require("sequelize")

const sequelize =new Sequelize("Day21_08","root","root",{
    host:"localhost",
    dialect:"mysql",
    logging:false
})

const dbConnect =async()=>{
    try{
        await sequelize.authenticate();
        console.log("DB Connected");
    }
    catch(err){
        console.log("Failed To Connect",err);
    }
}

sequelize.sync({force:false}).then(()=>{
    console.log("DB Synced");
}).catch((err)=>{
    console.log("FAiled To Sync",err);
})

module.exports ={sequelize,dbConnect}