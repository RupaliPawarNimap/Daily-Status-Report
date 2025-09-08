const { sequelize } = require("../config/db");

const {DataTypes}=require("sequelize");


const Permission =sequelize.define("Permission",{
      action_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"null"
      },
      base_url: {
        type: DataTypes.STRING,
        
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        
        allowNull: false,
      },
      method: {
        type: DataTypes.STRING,
        
        allowNull: false,
      },
})

module.exports={Permission}