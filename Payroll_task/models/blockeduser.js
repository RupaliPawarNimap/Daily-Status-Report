const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const BlockedUsers = sequelize.define("BlockedUsers", {
  blocked_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  blocked_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { BlockedUsers };
