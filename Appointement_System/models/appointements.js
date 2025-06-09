const {sequelize} =require("../config/db")
const {DataTypes} =require("sequelize");

const Appointements =sequelize.define("Appointements",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        
    },
    start_time:{
        type:DataTypes.DATE,
        allowNull:false
    },
    end_time:{
        type:DataTypes.DATE,
        allowNull:false
    },
    scheduled_at:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    status:{
        type:DataTypes.ENUM("Scheduled","Cancelled","Completed"),
        defaultValue:"Scheduled"
    },
   scheduled_by:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},
{
    timestamps:false
})

module.exports =Appointements