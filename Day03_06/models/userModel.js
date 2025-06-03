const {DataTypes} =require("sequelize")
const {sequelize} =require("../config/db")


const User =sequelize.define("User",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    paranoid:true,timestamps:true
}
)

User.sync();
User.sync({force:true})
// User.sync({alter:true})


module.exports ={User}