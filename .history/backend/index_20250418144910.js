const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();



  app.listen(PORT, () => {
    console.log(`🚀 App started on port ${PORT}!`);
    
    mongoose.connect(url);
    console.log("✅ Connected to MongoDB");
  });
// .then(() => {
  
// })
// .catch((err) => {
//   console.error("❌ MongoDB connection error:", err.message);
// });
