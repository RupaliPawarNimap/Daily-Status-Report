const {DataTypes, Sequelize} =require("sequelize")
const {sequelize} =require("../config/db")
const bcrypt =require("bcrypt")
 

const User =sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type :DataTypes.STRING,
        allowNull:false,
        validate:{
            len:{
               args: [3,15],
               msg:"Name must betweeen 3 to 5 length long"
            },
            notEmpty:{msg:"Name is Required"}
        }
    },
    email:{
        type:DataTypes.STRING,
        unique:{msg:"Mail Must Be unique"},
        allowNull:false,
        validate:{
            notEmpty:{msg:"Mail Must Be Required"},
            isEmail:{msg:"Must Be In Email Format"}
        }

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{msg:"Must Add Password"},
            len:{
                args:[6,100],
                msg:"Password Must be of 6 characheter"
            }
        }

    },
    role_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isIn:{
                args:[[1,6]],
                msg:"Id must be 1 (manger)or 6(Developer) only"
            }
        }

    }

})
 
User.beforeCreate(async(user)=>{
    user.password =await bcrypt.hash(user.password,10)
    console.log(user.password);
})
User.beforeUpdate(async(user)=>{
    if(user.changed("password")){
         user.password =await bcrypt.hash(user.password,10)
    }
   
})

module.exports =User