

const {AppointmentAttendees, User, Appointment}=require("../models/index")
const xlsx = require("xlsx");
const path = require("path");


const getAppointementDetails =async(req,res)=>{


    try{
      
        let details =await AppointmentAttendees.findAll({
 
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
 
    if (month) {
      let [year, mon] = month.split("-");
      let firstDay = new Date(year, mon - 1, 1);
      let lastDay = new Date(year, mon, 0);

      where.start_time = { [Op.gte]: firstDay };
      where.end_time = { [Op.lte]: lastDay };
    }
 
    if (startDate && endDate) {
      where.start_time = { [Op.gte]: new Date(startDate) };
      where.end_time = { [Op.lte]: new Date(endDate) };
    }

 
    const scheduledMeetings = await Appointment.count({ where });
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
 
    const reportData = [
      { Metric: "Scheduled Meetings", Count: scheduledMeetings },
      { Metric: "Accepted Meetings", Count: acceptedMeetings },
      { Metric: "Declined Meetings", Count: declinedMeetings },
      { Metric: "Pending Meetings", Count: pendingMeetings },
    ];
 
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(reportData);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Report");

    const filePath = path.join(
      __dirname,
      "..",
      "uploads",
      `Report_${Date.now()}.xlsx`
    );
    xlsx.writeFile(workbook, filePath);

    return res.status(200).json({
      msg: "Report generated successfully",
      scheduledMeetings,
      acceptedMeetings,
      declinedMeetings,
      pendingMeetings,
      filePath: `/uploads/${path.basename(filePath)}`,
      filter: month ? { month } : { startDate, endDate },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};



module.exports={getAppointementDetails,updateappointementResponse,getresponseOfAttendee,getReports}