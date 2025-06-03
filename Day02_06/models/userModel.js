const {DataTypes} =require("sequelize")
const {sequelize} =require("../config/db")
const bcrypt =require("bcrypt")
// const { hash } = require("crypto")

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
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    

    }

},
{
    paranoid:true,
    timestamps:true
}
)
// User.sync({ force: true })

User.beforeCreate(async(p)=>{
     p.password =await bcrypt.hash(p.password,10)
    console.log(p.password);
})
User.beforeUpdate(async(user)=>{
    if(user.changed("password")){
        user.password =await bcrypt.hash(user.password,10);
        console.log("Updated Password");

    }
   
})

module.exports ={User}