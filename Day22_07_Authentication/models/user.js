const {DataTypes} =require("sequelize")
const {sequelize} =require("../config/db")
const bcrypt =require("bcrypt")


const User =sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        },
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role_id:{
        type:DataTypes.INTEGER,
        references:{
            key:"id",
            model:"roles"
        }
    },
    otp:{
        type:DataTypes.STRING,
        allowNull:true
    },
    otp_expiry:{
        type:DataTypes.DATE,
        allowNull:true
    }
},{
    tableName:"users",
    hooks:{
       beforeCreate:(async(user)=>{
        user.password =await bcrypt.hash(user.password,10)
       }),
       beforeUpdate: (async(user)=>{
        if(user.changed("password")){
            user.password =await bcrypt.hash(user.password,10)
        }
       })
    },
    
})
// User.sync({alter:true})

module.exports ={User}