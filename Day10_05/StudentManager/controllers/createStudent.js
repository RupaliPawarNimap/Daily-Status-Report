const { response } = require("express");
const Student =require("../models/student");
exports.CreateStudent =async(req,res)=>{
    const {name,subjects,age ,isPassed}=req.body;
    let student =await (await Student.create({name,subjects,age,isPassed}))
    res.json(student)
}
exports.getStudents =async(req,res)=>{
   const studentData = await Student.find({})
   res.json( studentData) 
}
exports.getStudentById=async(req,res)=>{
    let id =req.params.id;
    const findStudent =await Student.findById(id);
    res.json(findStudent)
   
    
}
exports.updateStudent =async(req,res)=>{
    let id =req.params.id
    const update =await Student.findByIdAndUpdate(id,{})
    res.json(update)
     
}
exports.deleteStudent=async(req,res)=>{
     let id =req.params.id
     console.log(id)
    const deleted =await Student.findByIdAndDelete(id)
    res.json(deleted)
}

