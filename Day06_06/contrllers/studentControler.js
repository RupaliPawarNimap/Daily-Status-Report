const studentService=require("../services/studentServices")


exports.createStudent =async(req,res)=>{
    try{
        let student =await studentService.createService(req.body)
        if(!student){
            res.status(400).json("Enter The Student Details First")
        }
        else{
            return res.status(201).json({msg:"Student Created Successfully",student:student})
        }
    }
    catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})

    }
}

exports.getStudent =async(req,res)=>{
    try{
        let student =await studentService.getService()
        if(student.length==0){
            res.status(400).json({msg:"No any Student is available"})
        }
        else{
            res.status(200).json({msg:"Student Fetched Successfully",student:student})
        }
    }
    catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})

    }
}

exports.getStudentById =async(req,res)=>{
    try{
        let student =await studentService.getService(req.params.id)
        if(student.length==0){
            res.status(400).json({msg:"No any Student is available"})
        }
        else{
            res.status(200).json({msg:"Student Fetched Successfully",student:student})
        }
    }
    catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})

    }
}

exports.updateStudent =async(req,res)=>{
    try{
        let student =await studentService.updateStudentService(req.params.id,req.body,{new:true})
        if(!student){
            res.status(400).json({msg:"Id not Found"})
        }
        else{
            res.status(200).json({msg:"Student Updated Successfully",student:student})
        }
    }
    catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})

    }
}


exports.deleteStudent =async(req,res)=>{
    try{
        let student =await studentService.deleteStudentService(req.params.id)
        if(!student){
            res.status(400).json({msg:"Id not Found"})
        }
        else{
            res.status(200).json({msg:"Student Updated Successfully",student:student})
        }
    }
    catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})

    }
}