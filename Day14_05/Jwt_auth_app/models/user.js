const bcrypt = require("bcrypt");

const user = {
  name: "rupali",
  email: "abc@123",
  password: ""
};

function setupUser() {
  return bcrypt.hash("Rupali@123", 10).then(hash => {
    user.password = hash;
    return user;
  });
}

module.exports = setupUser;
