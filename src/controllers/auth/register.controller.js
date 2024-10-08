
const { logger } = require("../../utils/logger");

const {
  createUser,
  findByEmail,
  findByNik,
  getId,
} = require("../../services/auth.service");

const registerUser = async (req, res, next) => {
  const { email, nik, password, confirmPassword } = req.body;
  try {
    const findEmail = await findByEmail(email);
    const findNik = await findByNik(nik);

    if (findEmail || findNik) {
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: "Email or NIK already exists",
      });
    }
     if (password !== confirmPassword) {
       return res.status(400).json({
         status: false,
         statusCode: 400,
         message: "Password and confirmation password do not match",
       });
     }

    await createUser(req.body);
    logger.info("User created successfully");
    res.status(201).json({
      status: true,
      statusCode: 201,
      data: req.body,
      message: "User created successfully",
      
    });
  } catch (error) {
    logger.error("ERR: register - user creation failed:", error);
    next(error);
  }
};

module.exports = { registerUser };
