const {DataTypes} =require("sequelize");
 const {sequelize} =require("../config/db");

 const Role =sequelize.define("Role",{
    role_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        
        
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    }
 
    

 })
 module.exports={Role}