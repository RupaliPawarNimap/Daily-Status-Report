const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Appointment = sequelize.define("Appointment", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  start_time: {
    type: DataTypes.DATE,
    allowNull: false,
    // defaultValue:DataTypes.NOW()
  },
  end_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("scheduled", "cancelled", "completed"),
    defaultValue: "scheduled",
  },
  location: {
    type: DataTypes.STRING,
  },
  created_at:{
    type:DataTypes.DATE,
    defaultValue:DataTypes.NOW()
  },
  meeting_link: {
    type: DataTypes.STRING,
  },
  created_by: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});


// Appointment.sync({alter:true}).then(()=>{
//     console.log("Appointement Synced");
// }).catch((Err)=>{
//     console.log("Appointement Failed To Sync",Err.message);
// })
module.exports = { Appointment };
