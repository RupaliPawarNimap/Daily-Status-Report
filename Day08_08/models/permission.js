const {DataTypes, Model} =require("sequelize");
const {sequelize} =require("../config/db");


const Permission =sequelize.define("Permission",{
    action:{
        type:DataTypes.STRING,
        allowNull:false
    },
    baseUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    path:{
        type:DataTypes.STRING,
        allowNull:false
    },
    method:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports ={Permission}
