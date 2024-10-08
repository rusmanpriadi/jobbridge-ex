const jwtLibrary = require("jsonwebtoken");
const { logger } = require("../utils/logger");

const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    logger.error("ERR: jwt - generateToken = ", "JWT_SECRET is not defined");
  }

  return jwtLibrary.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = { generateToken };
