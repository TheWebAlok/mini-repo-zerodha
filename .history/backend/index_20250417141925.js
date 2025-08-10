const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const app = express(); //


app.listen(3002, () => {
  console.log("App started on port 3002!");
mongoose.connect(url);

});
