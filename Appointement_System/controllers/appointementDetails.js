const aptDetails =require("../services/appointementDetails");

exports.createApt =async(req,res)=>{
    try{
        let appointement =await aptDetails.createDetails(req.body);
        if(appointement.length==0){
            return res.status(404).json({msg:"Failed To create Appointement Details"})
        }
        return res.status(200).json({msg:"Appointemnt Cretaed Successfully",appointement:appointement})
    }
    catch(Err){
        return res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
}

exports.getAllApt =async(req,res)=>{
    try{
        let apt =await aptDetails.getAllDetails();
        if(!apt){
            return res.status(404).json({msg:"Failed To Fetch Appointemnt Details"})
        }
        return res.status(200).json({msg:"Appointements Details Fetched Succesfully",apt:apt})
    }
     catch(Err){
        return res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }


}


exports.getAptById=async(req,res)=>{
    try{
        let apt =await aptDetails.getAptById(id,req.body)
         if(!apt){
            return res.status(404).json({msg:"Failed To Fetch Appointemnt Details Id"})
        }
             return res.status(200).json({msg:"Appointements Details Fetched Succesfully",apt:apt})
    }
     catch(Err){
        return res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
    
}

exports.upadteApt=async(req,res)=>{
    try{
        let apt =await aptDetails.updateAppointement(id,req.body)
         if(!apt){
            return res.status(404).json({msg:"Failed To Update Appointemnt Details Id"})
        }
             return res.status(200).json({msg:"Appointements Details Upadted Succesfully",apt:apt})
    }
     catch(Err){
        return res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
    
}

exports.deleteApt=async(req,res)=>{
    try{
        let apt =await aptDetails.deleteAppointement(id,req.body)
         if(!apt){
            return res.status(404).json({msg:"Failed To Delete Appointemnt Details Id"})
        }
             return res.status(200).json({msg:"Appointements Details Deleted Succesfully",apt:apt})
    }
     catch(Err){
        return res.status(500).json({msg:"Internal Server Error",err:Err.message})
    }
    
}
