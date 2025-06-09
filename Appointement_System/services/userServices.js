const {User,Role} =require("../models/index")


exports.createUser  =async(data)=>{
    return await User.create(data)
}

exports.getAllUSer =async()=>{
    return await User.findAll({
        include:{
            model:Role,
            as:"role",
            attributes:["id","title"]
        }
    });
}

exports.getUSerById =async(id)=>{
    return await User.findByPk(id,{
        include:{
            model:Role,
            as:"role",
            attributes:["id","title"]
        }
    })
}

exports.deleteUSer =async(id)=>{
    return await User.destroy({where:{id}})
}

exports.updateUSer =async(id,data)=>{
    let user =await User.findByPk(id)
    if(!user){
        throw new Error("USer does Not Exist")
    }
    let updateUser =await user.update(data);
    return updateUser
}