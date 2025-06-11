const { response } = require("express");
const {sequelize} =require("../config/db");
const {DataTypes} =require("sequelize");


const Appointement_Attendace =sequelize.define("Appointement_Attendance",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    developer_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:{msg:"Developer id must be Required"},
            isInt:{msg:"Must be Interge"}
        }
    },
    appointement_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
         validate:{
            notEmpty:{msg:"Developer id must be Required"},
            isInt:{msg:"Must be Interger"}
        }
    },
    status:{
        type:DataTypes.ENUM("Pending","Rejected","Accepted"),
        defaultValue:"Pending"
    },response_at:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
      
    }
},
{
    timestamps:false
}

)

module.exports =Appointement_Attendace