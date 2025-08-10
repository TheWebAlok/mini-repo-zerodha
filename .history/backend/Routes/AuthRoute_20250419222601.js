const express = require("express");
const router = express.Router();
const { Signup } = require("../Controllers/AuthController");

router.post("/signup", Signup); // <-- this matters!

module.exports = router;

