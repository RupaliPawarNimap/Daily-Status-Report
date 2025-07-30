const {DataTypes} =require("sequelize");
const { sequelize} =require("../config/db")

const user =sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    profile_path:{
        type:DataTypes.STRING
    },
    profile_originalname:{
        type:DataTypes.STRING

    },
        resume_path:{
        type:DataTypes.STRING
    },
    resume_originalname:{
        type:DataTypes.STRING

    }

})
// user.sync({force:true});
// user.sync({alter:true})

module.exports ={user}