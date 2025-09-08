const {DataTypes} =require("sequelize");
const { sequelize}=require("../config/db");


const RolePermission =sequelize.define("RolePermission",{
     
      role_id: { 
        type: DataTypes.INTEGER, 
        
        allowNull: false, 
      }, 
      permission_id: { 
        type: DataTypes.INTEGER, 
         
        allowNull: false, 
      }
})

module.exports={RolePermission}