const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ status: false, message: "Invalid token" });
    }

    // Attach user to request for use in next handlers
    req.user = user;
    next(); // move to the next middleware or route
  } catch (err) {
    return res.status(401).json({ status: false, message: "Token invalid" });
  }
};
