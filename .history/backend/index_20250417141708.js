const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");


const PORT = process.env
const app = express(); //



app.listen(3002, () => {
  console.log("App started on port 3002!");
});
