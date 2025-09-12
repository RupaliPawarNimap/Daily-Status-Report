// models/bulkUpload.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const BulkUpload = sequelize.define("BulkUpload", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
file_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
uploaded_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
total_records: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
success_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
    error_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  file_path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "bulk_uploads",
  timestamps: true,
  underscored: true,
});

module.exports = { BulkUpload };
