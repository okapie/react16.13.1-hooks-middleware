const express = require("express");

const router = express.Router();

// GET http://localhost:8080/api/v1/user/test
router.get("/test", function (req, res) {
  res.json({
    message:"Here's user API."
  });
});

module.exports = router;
