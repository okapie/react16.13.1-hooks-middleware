const express = require("express");

const router = express.Router();

// GET http://localhost:8080/api/v1/article/test
router.get("/test", function (req, res) {
  res.json({
    message:"Here's article API."
  });
});

module.exports = router;
