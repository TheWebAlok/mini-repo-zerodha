
  // --------------------------------------------------
  // Import necessary modules
require("dotenv").config();  // To load environment variables from a .env file
const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require('./model/HoldingsModel'); // Assuming you have this model

// Environment variables and constants
const PORT = process.env.PORT || 3002;  // Default to port 3002 if not set
// const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Zerodha";  // MongoDB URL from .env
const MONGO_URL = "mongodb://127.0.0.1:27017/Zerodha";


// Create Express app
const app = express();


// Connect to MongoDB and start the server
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server after DB connection is established
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Stop the app if DB fails
  });
