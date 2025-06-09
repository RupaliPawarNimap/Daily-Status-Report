const {DataTypes} =require("sequelize")
const {sequelize} =require("../config/db")


const Role =sequelize.define("Role",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    
    },
    description:{
        type:DataTypes.STRING,
       

    }

},{
    timestamps:false
})

module.exports =Role
