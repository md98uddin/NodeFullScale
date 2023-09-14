const express = require("express");
const cors = require("cors");

var app = express();
const port = 3000 || process.env.port;
app.use(express());
app.use(cors());
require("dotenv").config();

const mainRoutes = require("./src/routes/mainRoutes.controller.ts");
let x = 5;

app.listen(port, () => {
  console.log("server started");
});
