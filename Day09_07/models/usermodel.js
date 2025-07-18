const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");
const bcrypt =require("bcrypt")

const User=sequelize.define("User",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
      
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isIn:["Admin","Teacher","Students"]
        }
    },
  
});

User.beforeCreate(async(user)=>{
    if(user.password || typeof(user.password) =="string"){
        user.password =await bcrypt.hash(user.password,10)
    }
})
User.sync();    

module.exports ={User}