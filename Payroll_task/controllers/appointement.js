const { where ,Op} = require("sequelize");
const {sequelize}=require("../config/db")
const { transporter} =require("../utils/sendemail")
const { Parser } = require("json2csv");
const path = require("path");
const fs = require("fs");
const xlsx=require("xlsx")
 
 
const {Appointment,AppointmentAttendees,BlockedUsers,User} =require("../models/index");
const { response } = require("express");
 
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
      response: "pending",  
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

    if(appointments.length==0){
      return res.status(404).json({msg:"No Any Appointement Found"})
    }
  
    return res.status(200).json({
          
      msg: "Appointments filtered by date successfully",
      count:appointments.length,
      data: appointments,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};
const getAptById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(404).json({ msg: "Provide the id" });

    const details = await Appointment.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: "creator",
          attributes: ["first_name", "last_name", "email"],
        },
        {
          model: User,
          as: "attendees",
          attributes: ["first_name", "last_name", "email"],
          through: { attributes: [] },
          // separate: true, 
        },
      ],
    });

    if (!details) return res.status(404).json({ msg: "No details found" });
    return res.status(200).json({ msg: "Details fetched successfully", details });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};
const updateAppointment = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const id = req.params.id;
    const userId = req.user.id;  

    const { title, description, start_time, end_time, location, meeting_link, attendees } = req.body;

    
    const appointment = await Appointment.findByPk(id, { transaction: t });
    if (!appointment) {
      await t.rollback();
      return res.status(404).json({ msg: "Appointment not found" });
    }

    
    if (appointment.created_by !== userId) {
      await t.rollback();
      return res.status(403).json({ msg: "You are not allowed to update this appointment" });
    }
 
    if (start_time && end_time) {
      const start = new Date(start_time);
      const end = new Date(end_time);
      if (isNaN(start) || isNaN(end)) {
        await t.rollback();
        return res.status(400).json({ msg: "Invalid date format for start or end time" });
      }
      if (start >= end) {
        await t.rollback();
        return res.status(400).json({ msg: "Start time must be before end time" });
      }
    }
 
    await appointment.update(
      { title, description, start_time, end_time, location, meeting_link },
      { transaction: t }
    );

 
  
if (attendees && Array.isArray(attendees) && attendees.length > 0) {
  
  const existingUsers = await User.findAll({
    where: { id: attendees },
    attributes: ["id"],
    transaction: t,
  });
  if (existingUsers.length !== attendees.length) {
    await t.rollback();
    return res.status(400).json({ msg: "Some attendee IDs are invalid" });
  }

 
  let blockuser = await BlockedUsers.findAll({
    where: { blocked_by: userId, blocked_user: attendees },
    transaction: t,
  });
  if (blockuser.length > 0) {
    await t.rollback();
    return res.status(400).json({ msg: "You cannot update the appointment with a blocked user" });
  }

  let blockby = await BlockedUsers.findAll({
    where: { blocked_user: userId, blocked_by: attendees },
    transaction: t,
  });
  if (blockby.length > 0) {
    await t.rollback();
    return res.status(400).json({ msg: "Some attendees have blocked you, so you cannot include them" });
  }

 
  const currentAttendees = await AppointmentAttendees.findAll({
    where: { appointment_id: appointment.id },
    attributes: ["user_id"],
    transaction: t,
  });
  const currentIds = currentAttendees.map((a) => a.user_id);

 
  const newAttendees = attendees.filter((id) => !currentIds.includes(id));

  if (newAttendees.length > 0) {
    const newRecords = newAttendees.map((user_id) => ({
      user_id,
      appointment_id: appointment.id,
      status: "pending",
    }));
    await AppointmentAttendees.bulkCreate(newRecords, { transaction: t });
  }
}

    await t.commit();
    return res.status(200).json({ msg: "Appointment updated successfully", appointment });
  } catch (err) {
    await t.rollback();
    return res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

 

const deleteAppointment = async (req, res) => {
   try{
    let deletedAppointment;
    await sequelize.transaction(async(t)=>{
      let id =req.params.id
      let aptcheck = await Appointment.findOne({ where: { id, created_by: req.user.id }, transaction: t,});
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

const getAppointementStatus = async (req, res) => {
  try {
    const { status } = req.query;
    
    if (!status || !["completed", "cancelled", "scheduled"].includes(status))
      return res.status(404).json({ msg: "Provide valid status" });

    const appointments = await Appointment.findAll({
      where: { status:status, created_by: req.user.id},
      include: [
        { model: User, as: "creator", attributes: ["first_name", "last_name", "email"] },
        {
          model: User,
          as: "attendees",
          attributes: ["first_name", "last_name", "email"],
          through: { attributes: [] },
          // separate: true,
        },
      ],
    });
console.log(appointments);
    if (!appointments.length==0) return res.status(404).json({ msg: "No appointments found" });

    return res.status(200).json({ msg: `Appointments fetched for ${status}`, appointments });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};

 
 
const exportAppointments = async (req, res) => {
  try {
    let { startDate, endDate, status } = req.query;
    let where = {};

    if (startDate && endDate) {
      where.start_time = { [Op.gte]: new Date(startDate) };
      where.end_time = { [Op.lte]: new Date(endDate) };
    }

  if (status) {
  if (["scheduled", "completed", "cancelled"].includes(status)) {
    where.status = status;
  } else {
    return res.status(400).json({ msg: "Invalid status value" });
  }
}


    let appointments = await Appointment.findAll({
      where,
      include: [
        {
          model: User,
          as: "creator",  
          attributes: ["first_name", "last_name", "email"],
        },
        {
          model: User,
          as: "attendees",  
          attributes: ["first_name", "last_name", "email"],
          through: { attributes: ["response", "responded_at"] },
          
        },
      ],
    });

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ msg: "No appointments found for given filter" });
    }

    let data = [];
    appointments.forEach((apt) => {
      apt.attendees.forEach((attendee) => {
        data.push({
          appointment_id: apt.id,
          title: apt.title,
          start_time: apt.start_time,
          end_time: apt.end_time,
          status: apt.status,
          location: apt.location,
          meeting_link: apt.meeting_link,
          creator_name: `${apt.creator.first_name} ${apt.creator.last_name}`,
          attendee_name: `${attendee.first_name} ${attendee.last_name}`,
          attendee_email: attendee.email,
          response: attendee.AppointmentAttendees.response,
          responded_at: attendee.AppointmentAttendees.responded_at,
        });
      });
    });

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Appointments");

    const filePath = path.join(__dirname, "..", "uploads", `Appointments_${Date.now()}.xlsx`);
    xlsx.writeFile(workbook, filePath);

    return res.status(200).json({
      msg: "Appointments exported successfully",
      filePath: `/uploads/${path.basename(filePath)}`,
      totalRecords: data.length,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};



module.exports = { createAppointment ,getAllApt,getAptById,exportAppointments,getAppointmentsByDate,deleteAppointment,updateAppointment,getAppointementStatus};


 
