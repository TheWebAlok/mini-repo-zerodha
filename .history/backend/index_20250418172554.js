require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const { HoldingsModel } = require('./model/HoldingsModel');

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// Router started Here................................................

app.get('/addHoldings', async (req, res) => {
  const tempHoldings = 

  try {
    // Save all documents in parallel
    await Promise.all(
      tempHoldings.map((item) => {
        const newHolding = new HoldingsModel({
          name: item.name,
          qty: item.qty,
          avg: item.avg,
          price: item.price,
          net: item.net,
          day: item.day,
          isLoss: item.isLoss || false,
        });
        return newHolding.save();
      })
    );

    res.send("✅ Holdings inserted successfully!");
  } catch (err) {
    console.error("❌ Error inserting holdings:", err.message);
    res.status(500).send("Insert failed");
  }
});


























mongoose.connect(url)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server *after* DB is connected
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Stop the app if DB fails
  });

  
  // --------------------------------------------------
  // Import necessary modules
require("dotenv").config();  // To load environment variables from a .env file
const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require('./model/HoldingsModel'); // Assuming you have this model

// Environment variables and constants
const PORT = process.env.PORT || 3002;  // Default to port 3002 if not set
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/Zerodha";  // MongoDB URL from .env

// Create Express app
const app = express();

// Router to handle adding holdings
app.get('/addHoldings', async (req, res) => {
  const tempHoldings = 
    // Your tempHoldings array here (same as in your example)
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    // Add remaining holdings here...
  ];

  try {
    // Save all documents in parallel
    await Promise.all(
      tempHoldings.map((item) => {
        const newHolding = new HoldingsModel({
          name: item.name,
          qty: item.qty,
          avg: item.avg,
          price: item.price,
          net: item.net,
          day: item.day,
          isLoss: item.isLoss || false,
        });
        return newHolding.save();
      })
    );

    res.send("✅ Holdings inserted successfully!");
  } catch (err) {
    console.error("❌ Error inserting holdings:", err.message);
    res.status(500).send("Insert failed");
  }
});

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
