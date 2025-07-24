const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");
 


const rolePermission =sequelize.define("rolePermission",{
    role_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            key:"id",
            model:"roles"
        }
    },
    permission_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            key:"id",
            model:"permissions"
        }
    }
},{
    tableName:"rolePermissions"
})

module.exports={rolePermission}