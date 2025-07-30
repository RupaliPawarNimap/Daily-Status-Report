const {Sequelize} =require("sequelize");

const sequelize =new Sequelize("day30_07","root","root",{
    host:"localhost",
    dialect:"mysql",
    logging:false

})

const dbConnect =()=>{
    try{
 sequelize.authenticate();
    console.log("DB Connected✅");
    }
    catch(err){
        console.log("Failed To Connect",err);
    }
    
}

sequelize.sync({force:false}).then(()=>{
    console.log("DB Synced");
}).catch((err)=>{
    console.log("Failed To Sync");
})

module.exports ={sequelize,dbConnect}

 