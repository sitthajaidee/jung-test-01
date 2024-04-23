const express = require("express");
const router = express.Router();
const exampleService = require("../services/exampleService");

// Define route
router.get("/api", (req, res) => {
  const message = exampleService.getHelloMessage();
  res.send(message);
});

module.exports = router;
