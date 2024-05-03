const crypto = require("crypto");

exports.generatePlaybackURL = (req, res) => {
  const chid = req.headers["chid"];
  const EXP = Math.floor(Date.now() / 1000) + 3600;
  const domainEndpoint =
    "aa66fabcdb4b04ab982072401c5ad107-2059369177.ap-southeast-1.elb.amazonaws.com";
  const portEndpoint = "3000";

  // Generate signature using JavaScript
  const URL = `/live/eds/${chid}/HLS`;
  const BASE64_KEY =
    "4LmA4Lit4LmE4Lit4LmA4Lit4Liq4Lie4Li14LmC4Lit4LiL4Li1IOC5gOC4reC5hOC4reC5gOC4reC4quC4nuC4teC5guC4reC4i+C4tQ==";
  const DECODED_KEY = Buffer.from(BASE64_KEY, "base64").toString();

  const hmac = crypto.createHmac("sha256", DECODED_KEY);
  hmac.update(`${URL}/${EXP}`);
  const SIG = hmac.digest("hex");

  const playbackURL = `https://${domainEndpoint}:${portEndpoint}/live/eds/${chid}/HLS/${chid}.m3u8?rfkpoc=${EXP}_${SIG}`;
  res.json({ playbackURL });
};
