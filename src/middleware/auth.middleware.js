const jwtken = require("jsonwebtoken");
const { logger } = require("../utils/logger");
const { prisma } = require("../config/prisma");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwtken.verify(token, process.env.JWT_SECRET);
        const user = await prisma.users.findFirst({
          where: { id: decoded?.id },
        });
        req.user = user;
        next();
      }
    } catch (error) {
      logger.error("ERR: auth - getauser = ", error.message);
    }
  } else {
    logger.error("ERR: auth - getauser = ", "No token");
  }
};

const isAdmin = async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await prisma.users.findFirst({ where: { email } });
  if (adminUser?.role !== "admin") {
    logger.error("ERR: auth - getauser = ", "Not Authorised");
  } else {
    next();
  }
};

module.exports = { authMiddleware, isAdmin };
