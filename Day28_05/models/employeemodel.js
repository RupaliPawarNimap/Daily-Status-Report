const {DataTypes} =require("sequelize")
const {sequelize}=require("../config/db")

const User =sequelize.define("User",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true

    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    },
    position:{
        type:DataTypes.STRING,
        allowNull:false
    },
    salary:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
})

module.exports =User