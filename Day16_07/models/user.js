const {sequelize} =require("../config/db")
const {DataTypes} =require("sequelize")
const  bcrypt =require("bcrypt")

const User =sequelize.define("User",{
 name:{
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
    allowNull:false,
     
 },
 role_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
        model:"roles",
        key:"id"
    }
 }

},{
    tableName:"users",
    hooks:{
       beforeCreate:(async(user)=>{
        user.password =await bcrypt.hash(user.password,10);
       }),
       beforeUpdate:(async(user)=>{
        if(user.changed("password")){
            user.password =await bcrypt.hash(user.password,10)
        }
       })
    }
})


module.exports ={User}