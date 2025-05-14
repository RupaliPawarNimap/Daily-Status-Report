const express = require("express");
const { login, dashboard } = require("../controllers/user");
const { authMiddleware } = require("../middlewares/authmiddleware");

const router = express.Router();

router.post("/login", login);
router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
