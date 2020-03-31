const bcrypt = require("bcrypt");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      resolve(hash);
    });
  });
};

const generateRandomPassword = () => {
  return new Promise((resolve, reject) => {
    resolve(
      Math.random()
        .toString(36)
        .slice(-8)
    );
  });
};

const generateRandomNum = size => {
  return Math.floor(Math.random() * 99999 + 10000);
};

const defaultError = (res, err) => {
  return res.status(500).json({
    error: err
  });
};

module.exports = {
  defaultError,
  generateRandomPassword,
  hashPassword,
  generateRandomNum
};
