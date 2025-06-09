
const  {Role} =require("../models/index")
const {where} =require("sequelize")


exports.createRole =async(data)=>{
    return await Role.create(data)
}

exports.getAllRole =async(data)=>{
    return await Role.findAll();
}

exports.getRoleByID =async(id)=>{
    return await Role.findByPk(id)
}

exports.updateRole =async(id,data)=>{
   let role =await Role.findByPk(id);
  
   if(!role){
    throw new Error("Role Does Nottt Exist")
   }
   return role.update(data)

}
exports.deleteRole=async(id)=>{
    return await Role.destroy({where:{id}})
}