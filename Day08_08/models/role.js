const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db")

const Role =sequelize.define("Role",{
    name:{
        
        type:DataTypes.ENUM("Student","Admin"),
        allowNull:false,
        unique:true,
        
    }
})


module.exports ={Role}