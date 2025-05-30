const {Sequelize} =require("sequelize");


const sequelize=new Sequelize("Product","root","root",{
    host:"localhost",
    dialect:"mysql"
})

const dbconnect=async()=>{
    try{
  await sequelize.authenticate()
   console.log("Db Connected");
    }
    catch(err){
        console.log("Failed To Connect",err.message);
    }
  
   

}
module.exports ={sequelize,dbconnect}