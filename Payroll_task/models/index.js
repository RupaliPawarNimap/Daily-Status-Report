 
const {Role} =require("./role");
const {User}=require("./user");
const {Permission}=require("./permission")
const {
    RolePermission
} =require("./rolePermission");
const { Appointment } = require("./appointement");
const { AppointmentAttendees } = require("./appointementAttendess");
const {BlockedUsers} =require("./blockeduser");
const { sequelize } = require("../config/db");


Role.hasMany(User,{foreignKey:"role_id"});
User.belongsTo(Role,{foreignKey:"role_id"})


Role.belongsToMany(Permission,{through:RolePermission,foreignKey:"role_id"});
Permission.belongsToMany(Role,{through:RolePermission,foreignKey:"permission_id"});

User.hasMany(Appointment,{foreignKey:"created_by"})
Appointment.belongsTo(User,{foreignKey:"created_by",as:"creator"})

User.belongsToMany(Appointment,{through:AppointmentAttendees,foreignKey:"user_id",otherKey:"appointment_id"});
Appointment.belongsToMany(User,{through:AppointmentAttendees,foreignKey:"appointment_id",otherKey:"user_id"})
 

User.belongsToMany(User, {through: BlockedUsers,as: "Blocked", foreignKey: "blocked_by",otherKey: "blocked_user",});
User.belongsToMany(User, {  through: BlockedUsers,  as: "BlockedBy",   foreignKey: "blocked_user",  otherKey: "blocked_by",});
 
// Direct associations for the join table
AppointmentAttendees.belongsTo(Appointment, { foreignKey: "appointment_id" });
AppointmentAttendees.belongsTo(User, { foreignKey: "user_id" });

Appointment.hasMany(AppointmentAttendees, { foreignKey: "appointment_id" });
User.hasMany(AppointmentAttendees, { foreignKey: "user_id" });

// sequelize.sync({alter:true})
module.exports={User,Role,RolePermission,Permission,Appointment,AppointmentAttendees,BlockedUsers}