const {DataTypes} =require("sequelize");
const {sequelize}=require("../config/db")



const User =sequelize.define("User",{
    mitid:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        
    },
    cpr:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

module.exports ={User}