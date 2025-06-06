const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.PASSWORD,{
   host:"localhost",
   dialect:"mysql"
})

const dbconnet =()=>{
try{
  sequelize.authenticate();
    console.log("Db Connected");
}
catch(err){
    console.log("Failed To Connect");
}
   
}


module.exports ={dbconnet,sequelize}

