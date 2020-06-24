const express = require("express");
const router = express.Router();
const UserModel = require("../../../models/userModel.js");

const User = new UserModel();

router.get("/", function(req, res) {
  UserModel
    .find()
    .then(function (users) {
      res.json(users);
    });
});

router.post("/", function(req, res) {
    User.name = req.body.name;
    User.screen_name = req.body.screen_name;
    User.bio = req.body.bio;

    User.save(function(err) {
      if (err) {
        res.send(err);
        return;
      }

      res.json({ message: "Success!" });
    });
});

module.exports = router;
