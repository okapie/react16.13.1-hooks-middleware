const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const consola = require("consola");

mongoose.Promise = global.Promise;

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect("mongodb://127.0.0.1:27017/ExpressAPI", connectOptions);
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

const port = 8080;

const router = require("./models/routes/v1/");
app.use("/api/v1/", router);

app.listen(port);
consola.ready({
  message: `Server listening on http://127.0.0.1:${port}`,
  badge: true,
});
