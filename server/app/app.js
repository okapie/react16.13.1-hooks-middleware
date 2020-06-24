const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const consola = require("consola");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ExpressAPI");
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

const router = require("./models/routes/v1/");
app.use("/api/v1/", router);

app.listen(port);
consola.ready({
  message: `Server listening on http://localhost:${port}`,
  badge: true,
});
