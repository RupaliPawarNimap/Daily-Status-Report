const {DataTypes}=require("sequelize");
const {sequelize}=require("../config/db")


const User =sequelize.define("User",{
    name:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    profilePicture:{
        type:DataTypes.STRING,
        allowNull:false
    },
    resume:{
        type:DataTypes.STRING,
        allowNull:false
    },
    document:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports={User}