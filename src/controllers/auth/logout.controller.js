const { prisma } = require("../../config/prisma");
const { logger } = require("../../utils/logger");

// logout
const logout = async (req, res, next) => {
  const  refreshToken  = req.cookies;

  if (!refreshToken) {
    return res.status(403).json({
      status: false,
      statusCode: 403,
      message: "No refresh token found",
    });
  }

  try {
    // Find the user with the refresh token
    const user = await prisma.users.findFirst({
      where: {
        refreshToken,
      },
    });

    if (!user) {
      return res.status(403).json({
        status: false,
        statusCode: 403,
        message: "Invalid refresh token",
      });
    }

    // Clear the refresh token in the database
    await prisma.users.update({
      where: {
        id_user: user.id_user,
      },
      data: {
        refreshToken: "",
      },
    });

    // Clear the cookie in the client
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true, // Set to true if you're using https
      sameSite: "strict", // Prevent CSRF
      path: "/"
    });

    logger.info("User successfully logged out");

    res.json({
      status: true,
      statusCode: 200,
      message: "Logout successful",
    });
  } catch (error) {
    logger.error("ERR: logout - user = ", error);
    next(error);
  }
};

module.exports = {
  logout,
};
