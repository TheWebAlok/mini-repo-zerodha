require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// Router started Here................................................
app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [
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
    // ...baaki items yahi rakh lena...
  ];

  // Use Promise.all for all saves
  try {
    const saves = tempHoldings.map((item) => {
      let newHolding = new HoldingsModel({
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.net,
        day: item.day,
      });
      return newHolding.save();
    });

    await Promise.all(saves);
    res.send("Data added to MongoDB Atlas!");
  } catch (err) {
    console.error("Error saving data:", err.message);
    res.status(500).send("Error saving data.");
  }
});

// ✅ MongoDB connection and Server start
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 App started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
