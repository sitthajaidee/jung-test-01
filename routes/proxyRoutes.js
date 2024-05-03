const express = require("express");
const proxyController = require("../controllers/proxyController");

const router = express.Router();

router.get("/live/eds/:chid/HLS/:playlist", proxyController.proxyRequest);

module.exports = router;
