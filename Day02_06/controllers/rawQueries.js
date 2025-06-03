const { sequelize, QueryTypes } = require("sequelize")
const { User } = require("../models/userModel")

exports.creteUSer = async (req, res) => {
    try {

        const { name, email, age, password } = req.body
        let user = await User.sequelize.query("iNSERT INTO users (name,email,age,password,createdAt,updatedAt) values (:name,:email,:age,:password,NOW(),NOW())", {
            replacements: { name, email, age, password },
            type: QueryTypes.INSERT
        })
        if (user.length == 0) {
            return res.status(400).json({ msg: "Enter The user" })

        }
        return res.status(200).json({ msg: "USer created successfully", user: user })


    }
    catch (err) {
        res.status(500).json({ msg: "Internal Server Error", err: err.message })

    }
}


exports.rawGet = async (req, res) => {
    try {
        let user = await User.sequelize.query("SELECT * FROM users");
        if (!user) {
            return res.status(400).json({ msg: "No USer Exist" })
        }
        return res.status(200).json({ msg: "USer Fetched Successfully", user: user })

    }
    catch (err) {
        res.status(500).json({ msg: "Internal Server ERrror", err: err.message, errn: err.name })
    }

}

exports.rawUpdate = async (req, res) => {
    try {
        let { name, age, email, password } = req.body
        console.log(name, age, email, password);
        let id = parseInt(req.params.id)
        console.log(id);
        let user = await User.sequelize.query("UPDATE users SET name=:name,email=:email,age=:age,password=:password where id=:id", {
            replacements: { name, age, email, password, id },
            type: QueryTypes.UPDATE
        });
        console.log(user);
        if (!user || user.length == 0) {
            return res.status(400).json({ msg: "No USer Exist" })
        }
        return res.status(200).json({ msg: "USer Fetched Successfully", user: user })

    }
    catch (err) {
        res.status(500).json({ msg: "Internal Server ERrror", err: err.message, errn: err.name })
    }
}

exports.rawDelet = async (req, res) => {
    try {
        let id = req.params.id
        let user = await User.sequelize.query('DELETE FROM users WHERE id=:id', {
            replacements: { id },
            type: QueryTypes.DELETE

        });
        console.log(user);
       
        return res.status(200).json({ msg: "USer Deleted Successfully", user: user })

    }
    catch (err) {
        res.status(500).json({ msg: "Internal Server ERrror", err: err.message, errn: err.name })

    }
}