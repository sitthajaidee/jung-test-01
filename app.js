const express = require("express");
const bodyParser = require("body-parser");
const playbackRoutes = require("./routes/playbackRoutes");
const proxyRoutes = require("./routes/proxyRoutes");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(playbackRoutes);
app.use(proxyRoutes);

// Paths to SSL/TLS certificate and key
const keyPath = path.join(__dirname, "certs", "localhost.key");
const certPath = path.join(__dirname, "certs", "localhost.crt");

// Read SSL/TLS certificate and key
const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
};

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

https.createServer(options, app).listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
