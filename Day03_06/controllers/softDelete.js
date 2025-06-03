const { User } = require("../models/userModel");
const { Op } = require("sequelize")


exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(400).json("User Not Exist")
        }
        let deleteUSer = await user.destroy();
        return res.status(200).json({ msg: "User Deleted Successfully", duser: deleteUSer })


    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })

    }
}

exports.deletedUser = async (req, res) => {
    try {
        let deletedusers = await User.findAll({ where: { deletedAt: { [Op.not]: null } }, paranoid: false })
        if (!deletedusers || deletedusers.length == 0) {
            return res.status(400).json("No Any ussr deleted")
        }
        else {
            return res.status(200).json({ msg: "Deleted USsers are:", user: deletedusers })
        }


    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })

    }

}

exports.getAll = async (req, res) => {
    try {
        let deletedusers = await User.findAll({ paranoid: false })
        if (!deletedusers || deletedusers.length == 0) {
            return res.status(400).json("No Any ussr deleted")
        }
        else {
            return res.status(200).json({ msg: "All Ussers are ", user: deletedusers })
        }


    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })

    }

}

exports.restoreUser = async (req, res) => {

    try {
           let id =req.params.id
        let user = await User.findOne({ where: {id } ,paranoid:false})
        console.log(user);
        console.log(req.params.id);
        if (!user) {
            return res.status(400).json({ msg: "USer not exist" })
        }
        else {
            let restoreUSer =await user.restore()
            return res.status(200).json({ msg: "User Restored", user: restoreUSer })
        }



    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })

    }

}


