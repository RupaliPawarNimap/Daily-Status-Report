const appointement =require("../services/appointementService")

exports.createappointement =async(req,res)=>{
    try{
        let apt=await appointement.createAppointement(req.body);
        if(apt.length==0){
            return res.status(404).json("Failed To Create Appointemenet")
        }
        else{
            return res.status(201).json({msg:"Appointement Created Successfully",appointement:apt})
        }
    }
    catch(Err){
        res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
}
exports.getappointement =async(req,res)=>{
    try{
        let apt=await appointement.getAppointements(req.body);
        if(apt.length==0){
            return res.status(404).json("Failed To Fetch Appointemenet")
        }
        else{
            return res.status(201).json({msg:"Appointement Feteched Successfully",appointement:apt})
        }
    }
    catch(Err){
        res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
}

exports.getAppointementById=async(req,res)=>{
    try{
        let apt  =await appointement.getAppointementByid(req.params.id);
        if(!apt){
            return res.status(404).json({msg:"Appointement Not Found"})
        }
        return res.status(200).json({msg:"Appointement Fetched Successfully",appointement:apt})
    }
     catch(Err){
        res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
}

exports.updateAppointment=async(req,res)=>{
    try{
        let apt  =await appointement.updateAppointement(req.params.id,req.body);
        if(!apt){
            return res.status(404).json({msg:"Appointement Not Found"})
        }
        return res.status(200).json({msg:"Appointement updated Successfully",appointement:apt})
    }
     catch(Err){
        res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
}

exports.deleteAppointment=async(req,res)=>{
    try{
        let apt  =await appointement.deleteAppointement(req.params.id);
        if(!apt){
            return res.status(404).json({msg:"Appointement Not Found"})
        }
        return res.status(200).json({msg:"Appointement Deleted Successfully",appointement:apt})
    }
     catch(Err){
        res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
}