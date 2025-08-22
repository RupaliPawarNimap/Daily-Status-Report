const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db")


const User =sequelize.define("User",{
    mitID:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    name:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING
    }
})

module.exports ={User}