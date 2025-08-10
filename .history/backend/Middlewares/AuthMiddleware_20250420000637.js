const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false, message: "No token provided" });
  }

  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);
    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    req.user = user; // pass user to next route
    next();
  } catch (err) {
    return res.json({ status: false, message: "Token invalid" });
  }
};
