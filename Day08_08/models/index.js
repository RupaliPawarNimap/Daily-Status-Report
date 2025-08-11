const {Course} =require("./course");
const {Entrollment} =require("./entrollement");
const { Permission } = require("./permission");
const {Role} =require("./role");
const {User} =require("./user");
const {RolePermission} =require("./role_permission")

User.belongsToMany(Course,{through:Entrollment,foreignKey:"userId"});
Course.belongsToMany(User,{through:Entrollment,foreignKey:"courseId"});


Role.hasMany(User ,{foreignKey:"roleId"});
User.belongsTo(Role, { foreignKey: "roleId" })

User.hasMany(Course,{foreignKey:"createdBy"});
Course.belongsTo(User)


Role.belongsToMany(Permission,{through:RolePermission,foreignKey:"roleId"});
Permission.belongsToMany(Role,{through:RolePermission,foreignKey:"permissionId"})


module.exports ={User,Course,Entrollment,
    Role,RolePermission,Permission
}