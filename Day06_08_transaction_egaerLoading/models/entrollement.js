const {DataTypes, INTEGER} =require("sequelize");
const {sequelize} =require("../config/db");
const { Course } = require("./course");
const { User } = require("./user");

const Entrollment =sequelize.define("entrollment",{
    userId:{
        type:INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:"id"
        }
    },
    courseId :{
        type:INTEGER,
        allowNull:false,
        references:{
            model:Course,
            key:"id"
        }
    },
    paymentstatus:{
        type:DataTypes.STRING,
        
    }

})
console.log(Entrollment);

module.exports ={Entrollment}