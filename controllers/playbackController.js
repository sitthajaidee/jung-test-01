const crypto = require("crypto");

exports.generatePlaybackURL = (req, res) => {
  const chid = req.headers["chid"];
  const EXP = Math.floor(Date.now() / 1000) + 3600;

  // Generate signature using JavaScript
  const URL = `/live/eds/${chid}/HLS`;
  const BASE64_KEY =
    "4LmA4Lit4LmE4Lit4LmA4Lit4Liq4Lie4Li14LmC4Lit4LiL4Li1IOC5gOC4reC5hOC4reC5gOC4reC4quC4nuC4teC5guC4reC4i+C4tQ==";
  const DECODED_KEY = Buffer.from(BASE64_KEY, "base64").toString();

  const hmac = crypto.createHmac("sha256", DECODED_KEY);
  hmac.update(`${URL}/${EXP}`);
  const SIG = hmac.digest("hex");

  const playbackURL = `https://localhost:3000/live/eds/${chid}/HLS/${chid}.m3u8?rfkpoc=${EXP}_${SIG}`;
  res.json({ playbackURL });
};
