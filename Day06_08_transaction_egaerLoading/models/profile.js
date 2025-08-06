const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");
const { User } = require("./user");

const Profile =sequelize.define("profile",{
    userId:{
        type:DataTypes.INTEGER,
        
    
    },
    name:{
        type:DataTypes.STRING,
       

    }
})

module.exports ={Profile}