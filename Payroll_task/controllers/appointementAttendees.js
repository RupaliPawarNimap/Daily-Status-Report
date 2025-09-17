

const {AppointmentAttendees, User, Appointment}=require("../models/index")

const getAppointementDetails =async(req,res)=>{


    try{
      
        let details =await AppointmentAttendees.findAll({

             include:{
                    model:Appointment,

                    attributes:["start_time","end_time","location"],
                    include:{
                model:User,
                as:"creator",
                attributes:["first_name","last_name","email","id"],
                 
                
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
//update the response of appointemnt
const updateappointementResponse =async(req,res)=>{
    try{
const {response }=req.body
if(!response){
    return res.status(404).json({msg:"Provide the Response"})
}
const id =req.params.id

if(!["accepted","declined"].includes(response)){
    return res.status(404).json({msg:"Add Valid Response -Accepted or Declined"});

}
// console.log("id",id,req.user.id);  
let apt =await AppointmentAttendees.findOne({
    where:{
        appointment_id:id,
        user_id:req.user.id
    }
})
if(!apt){
    return res.status(404).json({msg:"No Any Appointement Found "})
}
apt.response=response
apt.responded_at=new Date()
await apt.save();
return res.status(200).json({msg:"Response updated Successfully"})

    }
    catch(err){
return res.status(500).json({msg:"Internal Server Error",err:err.message})
    }

}
//to get the response of attendees  who created appointemnt for them 
const getresponseOfAttendee =async(req,res)=>{
    try{
        let response =req.query.response
     
        if(!response){
            return res.status(404).json({msg:'Provide the Response'})
        }

    if(!["accepted","declined","pending"].includes(response)){
    return res.status(404).json({msg:"Add Valid Response -accepted , declined or pending"});
}
    let s = await AppointmentAttendees.findAll({
      where: { response },
      include: [
        {
          model: User,  
          attributes: ["first_name", "last_name", "email"],
        },
        {
          model: Appointment,
          where:{
            created_by:req.user.id
          },
          attributes: ["title", "start_time", "end_time", "status"],

          include: [
            {
              model: User,
              as: "creator", 
              attributes: ["first_name", "last_name", "email"],
            },
          ],
        },
      ],
    });
 
if(!s || s.length==0){
    return res.status(404).json({msg:`No Any Appointement Found with ${response}`})
}
return res.status(200).json({msg:`Appintement Found with ${response}`,Appointment:s})

}
catch(er){
    return res.status(500).json({msg:"Internal server Error",err:er.message})
}


}
 
const getReports = async (req, res) => {
  try {
    let { month, startDate, endDate } = req.query;

    let where = {};

    // If month filter is provided
    if (month) {
      let [year, mon] = month.split("-");
      let firstDay = new Date(year, mon - 1, 1);
      let lastDay = new Date(year, mon, 0);

      where.start_time = { [Op.gte]: firstDay };
      where.end_time = { [Op.lte]: lastDay };
    }

    // If custom range is provided
    if (startDate && endDate) {
      where.start_time = { [Op.gte]: new Date(startDate) };
      where.end_time = { [Op.lte]: new Date(endDate) };
    }

    // Count scheduled meetings
    const scheduledMeetings = await Appointment.count({ where });

    // Count by response type
    const acceptedMeetings = await AppointmentAttendees.count({
      include: [{ model: Appointment, where }],
      where: { response: "accepted" },
    });

    const declinedMeetings = await AppointmentAttendees.count({
      include: [{ model: Appointment, where }],
      where: { response: "declined" },
    });

    const pendingMeetings = await AppointmentAttendees.count({
      include: [{ model: Appointment, where }],
      where: { response: "pending" },
    });

    return res.status(200).json({
      msg: "Report generated successfully",
      scheduledMeetings,
      acceptedMeetings,
      declinedMeetings,
      pendingMeetings,
      filter: month ? { month } : { startDate, endDate },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};

 



module.exports={getAppointementDetails,updateappointementResponse,getresponseOfAttendee,getReports}