 const {DataTypes} =require("sequelize");
 const {sequelize} =require("../config/db");
const path = require("path");

 let file =sequelize.define("File",{
    filename:{
        type:DataTypes.STRING,
        allowNull:false
    },
    path:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mimitype:{
        type:DataTypes.STRING,
        allowNull:false
    }
 }
 
)

 module.exports ={file}