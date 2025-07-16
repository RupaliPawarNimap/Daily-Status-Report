    const {DataTypes} =require("sequelize");
    const {sequelize} =require("../config/db");



    const Permission =sequelize.define("Permission",{
        method:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        baseUrl :{
            type:DataTypes.STRING,
            allowNull:false,
            

        },description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        route:{
            type:DataTypes.STRING,
            allowNull:true
        }
    },
    {
        tableName:"permissions",
        timestamps:false,
       indexes:[
        {
            unique:true,
            fields:["method","baseUrl"]
        }
       ]
    }
    )

    module.exports ={Permission}