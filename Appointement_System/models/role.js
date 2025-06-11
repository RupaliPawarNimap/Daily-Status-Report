const {DataTypes} =require("sequelize")
const {sequelize} =require("../config/db")


const Role =sequelize.define("Role",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
           
            len:{
               args: [1,35],
               msg:"Title must between 1 to 35 char long"
            },
            notEmpty:{
                msg:"Title must Be Required"
            }

        }
    
    },
    description:{
        type:DataTypes.STRING,
       validate:{
       len:{
        args:[0,100],
        msg:"Description must be 0 to 100 char long"
       }
       }

    }

},{
    timestamps:false
})

module.exports =Role
