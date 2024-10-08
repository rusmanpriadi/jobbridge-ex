const { prisma } = require("../config/prisma");
const bcrypt = require("bcrypt");

const createUser = async (newRegister) => {
  const hashing = await bcrypt.hash(newRegister.password, 10);
  const registerUsers = await prisma.users.create({
    data: {
      nik: newRegister.nik,
      name: newRegister.name,
      email: newRegister.email,
      password: hashing,
      role: newRegister.role,
      refreshToken: "",
    },
  });

  return registerUsers;
};

const findByEmail = async (email) => {
  return await prisma.users.findUnique({
    where: {
      email,
    },
  });
};
const findByNik = async (nik) => {
  return await prisma.users.findUnique({
    where: {
      nik,
    },
  });
};

const getId = async (id_user) => {
  return await prisma.users.findFirst({
    where: {
      id_user,
    },
  });
};

module.exports = { createUser, findByEmail, findByNik, getId };
