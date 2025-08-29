 
const {Sequelize}=require("sequelize");


const sequelize=new Sequelize("Day29_08","root","root",{
    dialect:"mysql",
    host:"localhost",
    logging:false
})

const dbConnect =async()=>{
    try{
       await sequelize.authenticate();
       console.log("Db Connected ");
    }
    catch(err){
        console.log("Fialed To Connect");
    }
}

sequelize.sync({alter:false}).then(()=>{
    console.log("DB Synced");
}).catch(err=>{
    console.log("Failed To Sync");
})

module.exports={dbConnect,sequelize}
