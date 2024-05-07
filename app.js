const express = require("express");
const bodyParser = require("body-parser");
const playbackRoutes = require("./routes/playbackRoutes");
const proxyRoutes = require("./routes/proxyRoutes");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(playbackRoutes);
app.use(proxyRoutes);

app.listen(port, () => console.log("Listening on port " + port));

module.exports = app;
