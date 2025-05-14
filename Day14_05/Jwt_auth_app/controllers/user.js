const setupUser = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "Rupali";

let storedUser;

setupUser().then(user => {
  storedUser = user;
});

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!storedUser || email !== storedUser.email) {
    return res.status(400).json({ message: "User not registered" });
  }

  const match = await bcrypt.compare(password, storedUser.password);

  if (!match) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ email: storedUser.email }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
};

exports.dashboard = (req, res) => {
  res.send(`Hello ${req.user.email}, welcome to your dashboard`);
};
