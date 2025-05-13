const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
exports.SignUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        console.log(name)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send({
                status: false,
                msg: "User Already Exist"
            })

        }
        let hashPassword = await bcrypt.hash(password, 10);
        if (hashPassword) {
            console.log("Password Encrypted")
        }
        else {
            console.log("Failed to Encrypt Password")
        }
        const newUSer = await User.create({ name, email, password: hashPassword, role })
        res.status(200).json({
            status: true,
            msg: "Succefully Added New user",
            user: newUSer
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({

             
            status: "fail",
            msg: "instenal Server Error"
        })

    }

}

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
           return res.status(400).json({
                status: "failed",
                message: "Enter Valid Details"
            })
        }
        let user = await User.findOne({ email });
        if (!user) {
          return  res.status(400).json({
                status: "Failed",
                message: "User is Not Registered"
            })
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: "Failed",
                message: "Password is not Correct"
            })

        }
        else {
            const payload = {
                email: user.email,
                id: user._id,
                role: user.role
            }

            let token = jwt.sign(payload, process.env.JWT_SECERT || "default_secret", {
                expiresIn: "3d"

            });


            userData = user.toObject();
            userData.token = token;
            userData.password = undefined
            return res.status(200).json({
                status: "success",
                message: "Login successful",
                user: userData
            });
        }


    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "internal Server Error"
        })
    }
}