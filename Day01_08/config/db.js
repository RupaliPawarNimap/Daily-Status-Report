const {Sequelize} =require("sequelize");



const sequelize =new Sequelize("Day01_08","root","root",{
    dialect:"mysql",
    host:"localhost",
    logging:false
})


const dbConnect =()=>{
    try{
   sequelize.authenticate();
    console.log("DB Connected");
    }
    catch(err){
        console.log("Failed To Cnnect");
    }
  

}
sequelize.sync({force:false}).then(()=>{
    console.log("DB Synced");
}).catch((err)=>{
    console.log("Failed T Sync");
})

module.exports ={sequelize,dbConnect}
   