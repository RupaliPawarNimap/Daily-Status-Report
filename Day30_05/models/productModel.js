const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db")

const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type:DataTypes.STRING,
        defaultValue:"This is Product"

    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    category:{
        type:DataTypes.STRING,
        allowNull:false
    },
    brand:{
        type:DataTypes.STRING,
        allowNull:false
    }

})
module.exports ={Product}