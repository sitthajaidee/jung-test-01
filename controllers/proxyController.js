const request = require("request-promise");
const crypto = require("crypto");

exports.proxyRequest = async (req, res) => {
  try {
    const { chid, playlist } = req.params;

    // Generate new rfkpoc
    const EXP = Math.floor(Date.now() / 1000) + 3600;
    const URL = `/live/eds/${chid}/HLS`;
    const BASE64_KEY =
      "4LmA4Lit4LmE4Lit4LmA4Lit4Liq4Lie4Li14LmC4Lit4LiL4Li1IOC5gOC4reC5hOC4reC5gOC4reC4quC4nuC4teC5guC4reC4i+C4tQ==";
    const DECODED_KEY = Buffer.from(BASE64_KEY, "base64").toString();

    const hmac = crypto.createHmac("sha256", DECODED_KEY);
    hmac.update(`${URL}/${EXP}`);
    const SIG = hmac.digest("hex");

    // Construct rfkpoc
    const rfkpoc = `${EXP}_${SIG}`;

    const response = await request({
      uri: `https://mid-ovp-stg.play-rbcdn.ais.co.th:8438/live/eds/${chid}/HLS/${playlist}?rfkpoc=${rfkpoc}`,
      method: "GET",
    });

    if (!response) {
      throw new Error("Response is empty or undefined.");
    }

    let pattern;
    let modifiedResponse;
    let contentType;
    if (response.includes && response.includes(".ts")) {
      pattern = new RegExp(
        `${chid}-\\w+=\\d+-begin=\\d+-dur=\\d+-seq=\\d+\\.ts`,
        "g"
      );
      modifiedResponse = response.replace(pattern, (match) => {
        return `https://mid-ovp-stg.play-rbcdn.ais.co.th:8438/live/eds/${chid}/HLS/${match}?rfkpoc=${rfkpoc}`;
      });
      contentType = "video/mp2t"; // ".ts" files are video streams
    } else {
      pattern = new RegExp(`${chid}-\\w+=\\d+\\.m3u8`, "g");
      modifiedResponse = response.replace(pattern, (match) => {
        return `https://localhost:3000/live/eds/${chid}/HLS/${match}?rfkpoc=${rfkpoc}`;
      });
      contentType = "application/vnd.apple.mpegurl"; // Setting content type for ".m3u8" files
    }

    res.type(contentType);
    res.send(modifiedResponse);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
};
