const {DataTypes} =require("sequelize");
const {sequelize}=require("../config/db");
const bcrypt =require("bcrypt")


const User =sequelize.define("user",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    hooks:{
        beforeCreate:(async(user)=>{
            user.password =await bcrypt.hash(user.password,10)
        })
    }
}
)

module.exports ={User}

