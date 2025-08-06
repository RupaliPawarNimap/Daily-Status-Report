const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db")


const Course =sequelize.define("course",{
    c_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false,
    freezeTableName:true,
    // tableName:Contact
    
})


module.exports ={Course}