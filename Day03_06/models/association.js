const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");



const Country =sequelize.define("Country",{
    countryName:{
        type:DataTypes.STRING,
        unique:true
    }
},{
    
    timestamps:false
})



const Capital=sequelize.define("Capital",{
    capitalName:{
        type:DataTypes.STRING,
        allowNull:false

    }
},{
   
    timestamps:false
})
Country.hasOne(Capital)
sequelize.sync({alter:true})


module.exports={Country,Capital}