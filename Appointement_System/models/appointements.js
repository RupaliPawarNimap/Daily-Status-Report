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
        allowNull:false,
        validate:{
            len:{
                args:[1,50],
                msg:"Title Must require 1 to 50 char long"
            },
            notEmpty:{msg:"Title Must be Required"}
        }
        
    },
    description:{
        type:DataTypes.STRING,
         validate:{
            len:{
                args:[0,150],
                msg:"Description Must require 0 to 150 char long"
            },
            notEmpty:{msg:"Description Must be Required"}
        }
        
    },
    start_time:{
        type:DataTypes.DATE,
        allowNull:false,
        validate:{
           isDate:{msg:"Start Time must be Valid date"}
        }
    },
    end_time:{
        type:DataTypes.DATE,
        allowNull:false,
         validate:{
           isDate:{msg:"End Time must be Valid date"}
        }

    },
    scheduled_at:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue:DataTypes.NOW,
       
    },
    status:{
        type:DataTypes.ENUM("Scheduled","Cancelled","Completed"),
        defaultValue:"Scheduled"
    },
   scheduled_by:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isDecimal:true
        }
    }

},
{
    timestamps:false
})

module.exports =Appointements