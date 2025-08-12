const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");


const SFile =sequelize.define("SFile",{
    filepath:{
        type:DataTypes.STRING

    }
})
module.exports ={SFile}