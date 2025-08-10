const express = require("express");
require('do')
const app = express(); // 

app.listen(3002, () => {
  console.log("App started on port 3002!");
});
