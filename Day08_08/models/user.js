const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");

const {Role} =require("./role")


const User =sequelize.define("User",{
   name:{
    type:DataTypes.STRING,
    allowNull:false,

   },
   email:{
type:DataTypes.STRING,
allowNull:false,
unique:true
   },
   password:{
    type:DataTypes.STRING,
    allowNull:false
   },
   roleId:{
    type:DataTypes.INTEGER,
   

   },
   otp: {
  type: DataTypes.STRING,
  allowNull: true,
},
otp_expiry: {
  type: DataTypes.DATE,
  allowNull: true,
}

 
    
})

module.exports ={User}