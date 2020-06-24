const express = require("express");
const bodyParser = require("body-parser");
const consola = require("consola");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

app.get("/api/v1/", function(req, res) {
  res.json({
    message: "Hello,world"
  });
});

app.listen(port);
consola.ready({
  message: `Server listening on http://localhost:${port}`,
  badge: true,
});
