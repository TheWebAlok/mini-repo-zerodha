const express = require("express");

const app = express(); // ← YE () LAGANA ZARURI HAI

app.listen(3002, () => {
  console.log("App started on port 3002!");
});
~