const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express();

app.set("views", __dirname + "/public");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200);
  res.render("pages/index");
});

app.get("*", async (req, res) => {
  res.redirect("/");
});
app.listen(process.env.PORT, () => {
  console.log(`[SYSTEM] RTIK is Running.. {}`);
});
