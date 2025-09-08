const {DataTypes} =require("sequelize");
const {sequelize} =require("../config/db")
const bcrypt =require("bcrypt");
const { options } = require("../routes/roles");

 

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Name cannot be empty' },
        len: { args: [3, 100], msg: 'Name must be between 3 and 100 characters' },
      },
    },
    last_name:{
         type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Name cannot be empty' },
        len: { args: [3, 100], msg: 'Name must be between 3 and 100 characters' },
      },

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: 'Must be a valid email' },
        notEmpty: { msg: 'Email cannot be empty' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role_id:{
        type:DataTypes.INTEGER,
        // allowNull:false,
         references:{
            model:"roles",
            key:"id"
         }
        
    },
  
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    otp: {
  type: DataTypes.INTEGER,
  allowNull: true
},
otp_expiry: {
  type: DataTypes.DATE,
  allowNull: true
}
  },
  {
    tableName: 'users',
    timestamps: true,  
    underscored: true, // snake_case columns
    hooks:{
        beforeCreate:async(user)=>{
            user.password=await bcrypt.hash(user.password,10)
            console.log('HAsed');
        },
        beforeUpdate:async(user)=>{
            if(user.changed("password")){
                user.password=await bcrypt.hash(user.password,10);
                console.log("Updation time Changed")
            }
        }
    }
  }

);

// User.sync({alter:true}).then(()=>{
//   console.log("User Table Synced");
// }).catch((err)=>{
// console.log("Failed T Sync");
// })
 
module.exports={User}

 