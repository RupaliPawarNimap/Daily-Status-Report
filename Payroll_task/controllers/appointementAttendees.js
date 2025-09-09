

const {AppointmentAttendees, User, Appointment}=require("../models/index")

const getAppointementDetails =async(req,res)=>{
    try{
        let details =await AppointmentAttendees.findAll({

             include:{
                    model:Appointment,
                    attributes:["start_time","end_time","location"],
                    include:{
                model:User,
                attributes:["first_name","last_name"],
                attributes:[]
                
            }
                }
             
        })
        // console.log(details);
        return res.status(200).json({msg:"All Appointement Deatils Found Successfully",details:details})
    }
    catch(err){
        return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }
    
}



module.exports={getAppointementDetails}