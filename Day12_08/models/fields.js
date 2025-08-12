const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db");


const File=sequelize.define("File",{
    resume:{
        type:DataTypes.STRING,
        allowNull:false
    },
    profilePic:{
        type:DataTypes.STRING,
        allowNull:false
    },
    img:{
        type:DataTypes.STRING,
        allowNull:false
    }

    
})

module.exports = {
    File
};
