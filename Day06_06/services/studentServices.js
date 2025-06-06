const {mongoose} =require("mongoose")
const {Student} =require("../models/studentsModel")


const createService =async(data)=>{
    return await Student.create(data)
}


const getService =async()=>{
    return await Student.find()
}

const getStudentByIdService =async(data)=>{
    return await Student.findById(data)
}

const updateStudentService =async(id,data)=>{
    return await Student.findByIdAndUpdate(id,data,{new:true})
}

const deleteStudentService =async(data)=>{
    return await Student.findByIdAndDelete(data)
}

module.exports ={getService,updateStudentService,deleteStudentService,createService,getStudentByIdService}