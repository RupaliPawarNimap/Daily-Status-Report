const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db")


const Course =sequelize.define("Course",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    description:{
        type:DataTypes.STRING,
        
    },
    createdBy:{
        type:DataTypes.INTEGER

    }

})

module.exports ={Course}