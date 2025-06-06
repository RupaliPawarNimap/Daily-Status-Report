const mongoose = require("mongoose");
require('dotenv').config()

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  // ✅ corrected spelling here
    }).then(() => {
        console.log("MongoDB Connected");
    }).catch((err) => {
        console.log("Failed To Connect", err.message);
    });
};

module.exports = { dbConnect };
