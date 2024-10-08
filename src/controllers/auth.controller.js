const { prisma } = require("../config/prisma");
const bcrypt = require("bcrypt");
const { logger } = require("../utils/logger");
const {
  createUser,
  findByEmail,
  findByNik,
  getId,
} = require("../services/auth.service");
const { generateRefreshToken } = require("../config/refreshToken");

// Register user



// Get all users
const getallUser = async (req, res, next) => {
  try {
    const getUsers = await prisma.pelamars.findMany();
    res.status(200).json(getUsers);
  } catch (error) {
    logger.error("ERR: auth - getalluser failed:", error.message);
    next(error);
  }
};

// Get a single user
const getaUser = async (req, res, next) => {
  const { id } = req.params;
  const userId = parseInt(id);
  try {
    const user = await getId(userId);
    if (!user) {
      return res.status(404).json({
        status: false,
        statusCode: 404,
        message: "User not found",
      });
    }

    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Get user success",
      data: user,
    });
  } catch (error) {
    logger.error("ERR: auth - getauser failed:", error.message);
    next(error);
  }
};

// Update a user
const updatedUser = async (req, res, next) => {
  const { id } = req.user;
  const userId = parseInt(id);
  try {
    const updatedUser = await prisma.pelamars.update({
      where: { id: userId },
      data: { ...req.body },
    });

    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Update user success",
      data: updatedUser,
    });
  } catch (error) {
    logger.error("ERR: auth - updateUser failed:", error.message);
    next(error);
  }
};



module.exports = {
  getallUser,
  getaUser,
  updatedUser,
};
