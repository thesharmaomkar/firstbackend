const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.get("/backend", (req, res) => {
  res.send("Hello, Backend Developer");
});

app.get("/login", (req, res) => {
  res.send("<h1> Login to New protal jaro education </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Welcome Code</h2>");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
