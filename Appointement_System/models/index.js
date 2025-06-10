const User = require("./users");
const Role = require("./role");
const Appointements=require("./appointements")
const Appointement_Attendace =require("./appointementsDetails");
const BlockedUser =require("./blockedUSer")

Role.hasMany(User, {foreignKey: "role_id",as: "users"});
User.belongsTo(Role, {foreignKey: "role_id",as: "role"});

User.hasMany(Appointements,{foreignKey:"scheduled_by",as:"appointements"})
Appointements.belongsTo(User,{foreignKey:"scheduled_by" , as :"Creater"})

Appointements.hasMany(Appointement_Attendace,{foreignKey:"appointement_id",as :"Attendece"})
Appointement_Attendace.belongsTo(Appointements,{foreignKey:"appointement_id",as :"Appointements"})
User.hasMany(Appointement_Attendace,{foreignKey:"developer_id",as: "attendences"})
Appointement_Attendace.belongsTo(User,{foreignKey:"developer_id",as:"developer"})



User.hasMany(BlockedUser,{foreignKey:"blocked_by",as :"blockList"});
BlockedUser.belongsTo(User,{foreignKey:"blocked_by",as:"Blocker"})

User.hasMany(BlockedUser,{foreignKey:"blocked_User",as :"blocker"});
BlockedUser.belongsTo(User,{foreignKey:"blocked_User",as:"Blocked"})



 
module.exports = {
  User,
  Role,
  Appointements,
  Appointement_Attendace,
  BlockedUser
};
