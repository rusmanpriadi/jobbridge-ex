const { prisma } = require("../../config/prisma");
const bcrypt = require("bcrypt");
const { logger } = require("../../utils/logger");
const { generateRefreshToken } = require("../../config/refreshToken");

const loginUserCtrl = async (req, res, next) => {
  const { nik, password } = req.body;
  try {
    const findUser = await prisma.users.findFirst({ where: { nik } });

    if (!findUser) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: "Invalid Credentials",
      });
    }

    const passwordMatched = await bcrypt.compare(password, findUser.password);
    if (!passwordMatched) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: "Invalid Credentials",
      });
    }

    const refreshToken = await generateRefreshToken(findUser.id_user);
    const updateUser = await prisma.users.update({
      where: { id_user: findUser.id_user },
      data: { refreshToken },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production", // Only secure in production
      sameSite: "strict",
    });

    res.status(201).json({
      status: true,
      statusCode: 201,
      message: "Login Success",
      data: updateUser,
    });
  } catch (error) {
    logger.error("ERR: login - user login failed:", error);
    next(error);
  }
};

module.exports = { loginUserCtrl };
