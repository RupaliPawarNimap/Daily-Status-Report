const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");
 

const User =sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
    
})

// User.sync({force:true})
module.exports ={User}