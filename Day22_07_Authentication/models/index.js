const { Permission } = require("./permission")
const {Role} =require("./role");
const {User} =require("./user");
const {rolePermission} =require("./rolePermission");



Role.hasMany(User,{foreignKey:"role_id",as:"users"})
User.belongsTo(Role,{foreignKey:"role_id",as:"roles"});

Permission.belongsToMany(Role,{through:rolePermission,foreignKey:"permission_id",otherKey:"role_id",as:"roles"});
Role.belongsToMany(Permission,{through:rolePermission,foreignKey:"role_id",otherKey:"permission_id",as:"permission"})

Permission.hasMany(rolePermission,{foreignKey: "permission_id",as:"rolePermission"})
rolePermission.belongsTo(Permission,{foreignKey: "permission_id",as:"Permission"});

module.exports ={
    Role,User,Permission,rolePermission
}