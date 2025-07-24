const {DataTypes} =require("sequelize")
const {sequelize} =require("../config/db")



const Permission =sequelize.define("permission",{
     
    action:{
        type:DataTypes.STRING,
        allowNull:false

    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    baseUrl :{
        type:DataTypes.STRING,
        allowNull:false
    },
    path:{
        type:DataTypes.STRING,
        allowNull:false
    },
    method:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    tableName:"permissions",
    paranoid:true
})


module.exports ={Permission}
