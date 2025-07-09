const {sequelize}=require("../config/db")
const {DataTypes} =require("sequelize")
const bcrypt =require("bcrypt")


const User =sequelize.define("User",{
    fname:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    lname :{
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

})
User.beforeCreate(async(user)=>{
    if(user.password && typeof(user.password)==="string"){
        user.password =await bcrypt.hash(user.password,10)
    }
})

User.beforeUpdate((user)=>{
     if(user.password && typeof user.password==="string"){
        user.password =bcrypt.hash(user.password,10)
    }
})
module.exports ={User}