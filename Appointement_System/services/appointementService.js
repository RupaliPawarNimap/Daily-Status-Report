const {Appointements,User}=require("../models/index")

exports.createAppointement =async(data)=>{
    return await Appointements.create(data)
}

exports.getAppointements =async(data)=>{
return await Appointements.findAll({
    include:{
        model:User,
       as :"Creater",
        attributes:["id","name","email"]
    }
});
}

exports.getAppointementByid=async(id)=>{
    return await Appointements.findByPk(id,{
        include:{
            model:User,
           as :"Creater",
            attributes:["id","name"]
        }

    })
}
exports.updateAppointement =async(id,data)=>{
    let appointement=await Appointements.findByPk(id)
    if(!appointement){
        return "Failed To fetch ID"
    }
    return await appointement.update(data)

}
exports.deleteAppointement =async(id)=>{
    return await Appointements.destroy({where:id})
}

