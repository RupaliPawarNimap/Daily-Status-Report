const {Role} =require("./roleModel");
const {User} =require("./usermodel")
const {sequelize} =require("../config/db");

Role.hasMany(User);
User.belongsTo(Role);


module.exports={
    sequelize,Role,User
}