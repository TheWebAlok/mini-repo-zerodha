const express = require("express");
const router = express.Router();

// ✅ Import userVerification from correct path
const { userVerification } = require("../Middlewares/AuthMiddleware");

// 🏠 HOME route (protected)
router.post("/", userVerification, (req, res) => {
  res.json({
    status: true,
    message: "Welcome to the HOME route!",
    user: req.user.username,
  });
});

module.exports = router;
