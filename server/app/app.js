const express = require("express");
const bodyParser = require("body-parser");
const consola = require("consola");

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
