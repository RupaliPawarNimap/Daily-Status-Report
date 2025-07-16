const {User} =require("./user");
const {checkPermission} =require("./checkpermission");
const {Permission} =require("./permission");
const {Role} =require("./role");




Role.hasMany(User,{foreignKey:'role_id'});
User.belongsTo(Role,{foreignKey:"role_id"})


Role.belongsToMany(Permission,{through:checkPermission})
Permission.belongsToMany(Role,{through:checkPermission})



module.exports ={
    Role,
    Permission,
    checkPermission,
    User
}