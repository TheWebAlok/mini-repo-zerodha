const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// Connect to MongoDB first, then start the server
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  app.listen(PORT, () => {
    console.log(`🚀 App started on port ${PORT}!`);
    console.log("✅ Connected to MongoDB");
  });
// .then(() => {
  
// })
// .catch((err) => {
//   console.error("❌ MongoDB connection error:", err.message);
// });
