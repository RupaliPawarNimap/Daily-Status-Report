const {Sequelize} =require("sequelize")

const sequelize =new Sequelize("test_db","root","root",{
    host:"localhost",
    dialect:"mysql"
})

const dbconnect =async()=>{
    try{
 await sequelize.authenticate();
    console.log("Db Connected");
    }
    catch(err){
        console.log("Something went Wrong",err.message);
    }
    
}

module.exports ={dbconnect,sequelize}