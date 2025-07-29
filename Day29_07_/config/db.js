const {Sequelize} =require("sequelize")


const sequelize =new Sequelize("multer","root","root",{
    host:"localhost",
    dialect:"mysql",
    logging:false
})

const dbConnect =()=>{
    try{
        sequelize.authenticate();
        console.log("Db Connected");
    }
    catch(err){
        console.log("err",err.message);
    }
}

module.exports ={dbConnect,sequelize}