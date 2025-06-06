const {DataTypes, Sequelize} =require("sequelize")
const {sequelize} =require("../config/db")
const bcrypt =require("bcrypt")
const { USE } = require("sequelize/lib/index-hints")

const User =sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type :DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false

    },
    role_id:{
        type:DataTypes.INTEGER,
        allowNull:false

    }

})
Sequelize.sync()
User.beforeCreate(async(user)=>{
    user.password =await bcrypt.hash(user.password,10)
    console.log(user.password);
})
User.beforeUpdate(async(user)=>{
    if(user.changed("password")){
         user.password =await bcrypt.hash(user.password,10)
    }
   
})

module.exports =User