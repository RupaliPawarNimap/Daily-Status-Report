const {User,BlockedUser} =require("../models/index");

exports.createUser =async(data)=>{
    return await BlockedUser.create(data)
}

exports.getBlockedUser=async()=>{
    return await BlockedUser.findAll({
        include:{
            model:User,
            as:"Blocker",
            attributes:["name"]
        }
    })
}


exports.getBlockedUserByID=async(id)=>{
    return await BlockedUser.findByPk(id,{
        include:{
            model:User,
            as:"Blocker",
            attributes:["name"]
        }
    })
}


exports.updateBlockedUSer =async(id,data)=>{
    let blockedUser =await blockUser.findByPk(id);
    if(!blockedUser){
        return "No Any user Blocked"
    }
    return await blockedUser.update(data)
}

exports.deleteBlockedUSer =async(id)=>{
    return await BlockedUser.destroy({where:id})
}