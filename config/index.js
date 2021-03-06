const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.MONGODB_URL,
  jwtKey: process.env.SECRET,
};
