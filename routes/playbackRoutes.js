const express = require("express");
const playbackController = require("../controllers/playbackController");

const router = express.Router();

router.post("/generatePlaybackURL", playbackController.generatePlaybackURL);

module.exports = router;
