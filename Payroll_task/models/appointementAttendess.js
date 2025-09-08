const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const AppointmentAttendees = sequelize.define("AppointmentAttendees", {
  appointment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  response: {
    type: DataTypes.ENUM("pending", "accepted", "declined"),
    defaultValue: "pending",
  },
  responded_at: {
    type: DataTypes.DATE,
  },
});

module.exports = { AppointmentAttendees };
