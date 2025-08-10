// model/HoldingsModel.js
const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const HoldingsModel = mongoose.model("Holdings", holdingSchema);

module.exports = { HoldingsModel };
