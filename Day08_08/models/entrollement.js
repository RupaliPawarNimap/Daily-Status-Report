const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db")


const Entrollment =sequelize.define("Entrollemnt",{
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    courseId :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    file_path:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports ={Entrollment}