const { where } = require("sequelize");
const {sequelize}=require("../config/db")
const {sendMail,transporter} =require("../utils/sendemail")
 
const {Appointment,AppointmentAttendees,BlockedUsers,User} =require("../models/index")
 
const createAppointment = async (req, res) => {
  const t = await sequelize.transaction();  
  try {
    const { title, description, start_time, end_time, location, meeting_link, attendees } = req.body;

     const start = new Date(start_time);
    const end = new Date(end_time);

if (isNaN(start) || isNaN(end)) {
      return res.status(400).json({ msg: "Invalid date format for start or end time" });
    }
    if(start >= end) {
      return res.status(400).json({ msg: "Start time must be before end time" });
    }

if (!Array.isArray(attendees) || attendees.length === 0) {
      return res.status(400).json({ msg: "At least one attendee is required" });
    }

    const existingUsers = await User.findAll({
      where: { id: attendees },
      attributes: ["id"],
      transaction:t
    });

     const created_by=req.user.id
    if (existingUsers.length !== attendees.length) {
      return res.status(400).json({ msg: "Some attendee IDs are invalid" });
    }
    let blockuser =await BlockedUsers.findAll({
      where:{
        blocked_by:created_by,
        blocked_user:attendees,
         
      },
      transaction:t
    })
if(blockuser.length>0){
  return res.status(400).json({msg:"U cannot Create the Appointement With u have blocked USer"})
}
let blockby =await BlockedUsers.findAll({
  where:{blocked_user:created_by,
    blocked_by:attendees
  },
  transaction:t
})
     
if(blockby.length>0){
  return res.status(400).json({msg:"Some Of Attendees Is Blocked U ,So U cant create The Appointement With them"})
}
    const appointment = await Appointment.create({
      title,
      description,
      start_time,
      end_time,
      location,
      meeting_link,
      created_by,
    },{transaction:t});

    
  const attendeeRecords = attendees.map((user_id) => ({
      user_id,
      appointment_id: appointment.id,
      status: "pending",  
    }));

    await AppointmentAttendees.bulkCreate(attendeeRecords,{transaction:t});
    await t.commit()

    return res.status(201).json({
      msg: "Appointment created successfully",
      appointment,
      attendees: attendeeRecords,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};


const getAllApt=async(req,res)=>{
  try{
    let page =parseInt(req.query.page) ||1
    let limit =parseInt(req.query.limit)||10
    let offset=(page-1)*limit
    let details=await Appointment.findAll({limit,offset }
    )
    if(!details || details.length==0){
      return res.status(400).json({msg:"No Any Appointement Found"})
    }
    return res.status(200).json({msg:"Fetched Appointement Successfully",appointemnt:details})
  }
  catch(err){
    return res.status(500).json({msg:"Internal Server Error",err:err.message})
  }
}
 

 


const getAppointmentsByDate = async (req, res) => {
  try {
    const { start_date, end_date } = req.query;

    if (!start_date || !end_date) {
      return res.status(400).json({ msg: "start_date and end_date are required" });
    }
  const appointments = await Appointment.findAll({
      where: {
       start_time: {
          [Op.between]: [new Date(start_date), new Date(end_date)],
        },
      },
      include: [
   { model: User, as: "creator", attributes: ["first_name", "last_name"] },
      ],
      order: [["start_time", "ASC"]],
    });

    return res.status(200).json({
      msg: "Appointments filtered by date successfully",
      data: appointments,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};

const getAptById=async(req,res)=>{
  try{
 let id =req.params.id
 if(!id){
  return res.status(404).json({msg:"Provide the id "})
 }
 let details =await Appointment.findOne({where:{
  id:id},
  include:[{
    model:User,
    as:"creator",
    attributes:["first_name","last_name","email"],

    
  },{
    model:User,
    // as:"users",
    attributes:["first_name","last_name","email"],
    through:{attributes:[]}
  }]
    
});
if(!details || details.length==0){
  return res.status(400).json({msg:"No Any Deatils Exist"})
}
return res.status(200).json({msg:"Details Fetached Successfully",details:details})
  }
   catch(err){
    return res.status(500).json({msg:"Internal Server Error",err:err.message})
  }
}

const updateAppointment=async(req,res)=>{

}
// controllers/appointmentController.js
 
 

const deleteAppointment = async (req, res) => {
   try{
    let deletedAppointment;
    await sequelize.transaction(async(t)=>{
      let id =req.params.id
      let aptcheck =await Appointment.findByPk(id,{transaction:t});
      if(!aptcheck){
        throw { status: 404, message: "Appointment Not Found" };
      }
      aptcheck.status="cancelled"
      
await aptcheck.save({transaction:t});
let aptDeatils =await AppointmentAttendees.findAll({
  where:{
    appointment_id:aptcheck.id
  }
})
if(!aptDeatils){
   throw { status: 400, message: "No attendees found for appointment" };  

}
let deleted =await AppointmentAttendees.destroy({where:{
  appointment_id:aptcheck.id
}})

if(!deleted){
   throw { status: 400, message: "Failed To Delete Appointment Attendees" };
}
deletedAppointment = { appointment: aptcheck, aptDeatils };

 
 
    })
        for (const attendee of deletedAppointment.aptDeatils) {
      const user = await User.findByPk(attendee.user_id);
      if (user && user.email) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: user.email,
          subject: "Appointment Cancelled",
          text: `The appointment "${deletedAppointment.appointment.title}" has been cancelled.`,
        });
      }
    }
    return res.status(200).json({msg:"Appointemnt Deleted Successfully"})
   }

   catch(err){
    if (err.status) {
      return res.status(err.status).json({ msg: err.message });
    }
    return res.status(500).json({msg:"Internal Server Error",er:err.message})
   }
};

module.exports = { createAppointment ,getAllApt,getAptById,getAppointmentsByDate,deleteAppointment,updateAppointment};


 
