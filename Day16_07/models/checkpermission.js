const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");
const { permission } = require("process");


const checkPermission =sequelize.define("checkPermission",{
    role_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"roles",
            key:"id"
        }
    },
    permission_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"permissions",
            key:"id"
        }
    }
})


module.exports ={checkPermission}