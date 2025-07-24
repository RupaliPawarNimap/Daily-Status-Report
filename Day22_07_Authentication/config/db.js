const {Sequelize} =require("sequelize");
require("dotenv").config();


const sequelize =new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:"localhost",
    dialect:"mysql",
    logging:false
})

const dbconect=()=>{
    try{
        sequelize.authenticate();
        console.log("Database Connected ✅");
        
    }
    catch{
        console.log("Failed To Connect Db ❌")

    }

}

 sequelize.sync({force:false}).then((res)=>{
    console.log("Database synced ✅")}) 
.catch((err) => {
    console.log("Failed to Sync ❌");
})



module.exports ={dbconect,sequelize}