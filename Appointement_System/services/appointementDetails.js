const {Appointement_Attendace,Appointements,User} =require("../models/index");

exports.createDetails =async(data)=>{
    return await Appointement_Attendace.create(data)
}

exports.getAllDetails=async()=>{
    return await Appointement_Attendace.findAll({
         include:[{
            model:Appointements,
           as :"Appointements",
            attributes:["id","status","title","start_time","end_time"]

        },
        {
         model:User,
            as:"developer",
            attributes:["id","name"]


    }]
})
}
exports.getDetailsById=async(id)=>{
    return await Appointement_Attendace.findByPk(id,{
         include:[{
            model:Appointements,
           as :"Appointements",
            attributes:["id","status","title","start_time","end_time"]

        },
        {
         model:User,
            as:"developer",
            attributes:["id","name"]


    }]
 } )}


exports.updateAppointement =async(id,data)=>{
    let apt =await Appointement_Attendace.findByPk(id);
    if(!apt){
        return "Appointement not Exist"
    }
    else{
        return await apt.update(data)
    }

}
exports.deleteAppointement =async(id)=>{
    return await Appointement_Attendace.destroy({where:id})
}