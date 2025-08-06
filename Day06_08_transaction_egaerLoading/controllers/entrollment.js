const { sequelize } = require("../config/db");
const { Entrollment, User, Course } = require("../models/index");


const createEntrollmet = async (req, res) => {
    try {
        let result = await sequelize.transaction(async t => {
            let { userId, courseId } = req.body;
            let checkuserid = await User.findByPk(userId, {
                transaction: t
            });
            if (!checkuserid) {
                throw new Error("U are not Student")
            }
            let checkcourseID = await Course.findByPk(courseId, { transaction: t })
            if (!checkcourseID) {
                throw new Error("Course Id not exist")
            }
            let entr = await Entrollment.create({ userId, courseId }, { transaction: t });
            return entr
        })
        return res.status(201).json({ msg: "Course Entrolld Successfuly", result })

    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server error", err: err.message })
    }
}


const getDetails = async (req, res) => {
    try {
        let details = await Entrollment.findAll({
            include: [{
                model: User,
                attributes: ["name"]
            },
            {
                model: Course,
                attributes: ["c_name"]
            }
            ]

        })
        return res.status(200).json({ msg: "All Details", details })

    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server error", err: err.message })
    }

}
module.exports = { createEntrollmet, getDetails }

