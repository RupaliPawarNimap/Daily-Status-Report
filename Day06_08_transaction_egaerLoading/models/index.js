const { sequelize } = require("../config/db");
const {Course} =require("./course");
const {User} =require("./user");
const {Entrollment} =require("./entrollement");
const { Profile } = require("./profile");


User.belongsToMany(Course,{through:Entrollment});
Course.belongsToMany(User,{through:Entrollment});

Entrollment.belongsTo(User)
Entrollment.belongsTo(Course)

// User.hasOne(Course);
// Course.belongsTo(User);

User.hasOne(Profile,{foreignKey:"userId"});
Profile.belongsTo(User,{foreignKey:"userId"})





sequelize.sync({force:false}).then(()=>{
    console.log("DB synced");
}).catch(err=>{
    console.log("Failed To Sync",err);
})

// User.sync({alter:true})
// .then(()=>{
//     console.log("USer Synced");
// })
// .catch((err)=>{
//     console.log("USer Not Synced");
// })

module.exports ={User,Course,Entrollment,Profile}

