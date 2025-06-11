const {sequelize} =require("../config/db");
const {DataTypes} =require("sequelize");

const BlockedUser =sequelize.define("BlockedUser",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    blocked_by:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isInt:{args:true,msg:"Blocked By Must be Integer"},
            notEmpty:{msg:"Blocked By Must Be Required"}
        }
    },
    blocked_User :{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isInt:{args:true,msg:"Blocked By Must be Integer"},
            notEmpty:{msg:"Blocked By Must Be Required"}
        }
    }
},{
    timestamps:true,
    indexes:[{
        unique:true,
        fields:["blocked_by","blocked_User"]

    }]
}
)

module.exports =BlockedUser