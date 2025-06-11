const {User,BlockedUser} =require("../models/index");

exports.createUser =async(data)=>{
    return await BlockedUser.create(data)
}

exports.getBlockedUser=async()=>{
    return await BlockedUser.findAll({
        include:[{
            model:User,
            as:"Blocker",
            attributes:["id","name"]
        },{
            model:User,
            as:"Blocked",
            attributes:["id","name"]
            
        }
    ]
    })
}


exports.getBlockedUserByID=async(id)=>{
    return await BlockedUser.findByPk(id,{
         include:[{
            model:User,
            as:"Blocker",
            attributes:["id","name"]
        },{
            model:User,
            as:"Blocked",
            attributes:["id","name"]
            
        }
    ]
    })
}


exports.updateBlockedUSer =async(id,data)=>{
    let blockedUser =await BlockedUser.findByPk(id);
    if(!blockedUser){
        return "No Any user Blocked"
    }
    return await blockedUser.update(data)
}

exports.deleteBlockedUSer =async(id)=>{
    return await BlockedUser.destroy({where:{id}})
}