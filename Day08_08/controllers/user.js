const { sequelize } = require("../config/db")
const bcrypt = require("bcrypt")
const { User, Role } = require("../models/index")
const jwt = require("jsonwebtoken")
 require("dotenv").config()


const register = async (req, res) => {
    try {
        let { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({ msg: "All Fields Are Required" })
        }
        checkemail = await User.findOne({ where: { email: email } })
        if (checkemail) {
            return res.status(400).json({ msg: "User With this email Already exist,Login Directly" })
        }
        let hashpsd = await bcrypt.hash(password, 10);
        let roles = await Role.findOne({ where: { name: role } });
        if (!roles) {
            return res.status(404).json({ msg: "Role Not EXist" })
        }
        let user = await User.create({ name, email, password: hashpsd, roleId: roles.id });
        if (user) {
            return res.status(201).json({ msg: "User Created Successfuly", user: user })
        }
        else {
            return res.status(400).json({ msg: "Failed To create User" })
        }


    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })
    }


}

const Login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are Required" })
        }
        let user = await User.findOne({ where: { email: email } });
        console.log(user.password);
        if (!user) {
            return res.status(400).json({ msg: "Register..." })
        }
        let chekpsd = await bcrypt.compare(password, user.password);
        if (!chekpsd) {
            return res.status(400).json({ msg: "Invalid Password" })
        }
        let token = await jwt.sign({ role_id: user.roleId, id: user.id, email: user.email, name: user.name }, process.env.SCREAT_KEY, { expiresIn: "1hr" });
        if (!token) {
            return res.status(400).json({ msg: "Failed To  Create Token" })
        }
        return res.status(200).json({ msg: "Login successfully", token })
    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })
    }

}
const getAll = async (req, res) => {
    try {
        let user = await User.findAll({
            include: {
                model: Role,
                attributes: ["name"]
            }
        });
        if (!user || user.length == 0) {
            return res.status(400).json({ msg: "Users Not Exists" })
        }
        return res.status(200).json({ msg: "User Fetched Successfully", user })

    }
    catch (err) {
        return res.status(500).json({ msg: "Internal Server Error", err: err.message })
    }
}

module.exports = { register, Login, getAll }