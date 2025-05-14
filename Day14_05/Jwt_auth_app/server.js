const express = require("express");
const route = require("./routes/authRoute");
require("dotenv").config();
const setupUser = require("./models/user");

const app = express();
app.use(express.json());

// Initialize user first, then start the server
setupUser().then(() => {
  app.use("/api", route);

  app.get("/", (req, res) => res.send("Hello World!"));

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error("❌ Failed to set up user:", err);
});
