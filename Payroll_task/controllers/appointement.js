
const {Appointment,AppointmentAttendees,BlockedUsers,User} =require("../models/index")
 
const createAppointment = async (req, res) => {
  try {
    const { title, description, start_time, end_time, location, meeting_link, attendees } = req.body;

     const start = new Date(start_time);
    const end = new Date(end_time);

    if (isNaN(start) || isNaN(end)) {
      return res.status(400).json({ msg: "Invalid date format for start or end time" });
    }
    if (start >= end) {
      return res.status(400).json({ msg: "Start time must be before end time" });
    }

  if (!Array.isArray(attendees) || attendees.length === 0) {
      return res.status(400).json({ msg: "At least one attendee is required" });
    }

    const existingUsers = await User.findAll({
      where: { id: attendees },
      attributes: ["id"],
    });

    if (existingUsers.length !== attendees.length) {
      return res.status(400).json({ msg: "Some attendee IDs are invalid" });
    }

     const created_by=req.user.id
    const appointment = await Appointment.create({
      title,
      description,
      start_time,
      end_time,
      
      location,
      meeting_link,
      created_by,
    });

    // 4️⃣ Insert attendees into AppointmentAttendees
    const attendeeRecords = attendees.map((user_id) => ({
      user_id,
      appointment_id: appointment.id,
      status: "pending", // default status
    }));

    await AppointmentAttendees.bulkCreate(attendeeRecords);

    return res.status(201).json({
      msg: "Appointment created successfully",
      appointment,
      attendees: attendeeRecords,
    });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

module.exports = { createAppointment };


module.exports={createAppointment}
