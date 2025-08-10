require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

mongoose.connect(url)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // Start the server *after* DB is connected
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Stop the app if DB fails
  });
