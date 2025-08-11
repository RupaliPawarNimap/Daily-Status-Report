const {DataTypes} =require("sequelize");
const {sequelize}=require("../config/db");
const {Role} =require("./role")
const { Permission } = require("./permission");


const RolePermission =sequelize.define("RolePermission",{
    roleId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Role,
            key:"id"
        }
    },
    permissionId:{
        type:DataTypes.INTEGER,
        allowNull:false,
         references:{
            model:Permission,
            key:"id"
        }
    }
})

module.exports ={RolePermission}