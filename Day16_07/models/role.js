const {sequelize} =require("../config/db");
const {DataTypes} =require("sequelize")


const Role =sequelize.define("Role",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    tableName:"roles",
    timestamps:false
})


module.exports ={Role}