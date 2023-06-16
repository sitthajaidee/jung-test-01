const axios = require("axios");

const url = "https://dummyjson.com/products";

module.exports.axiostrigger = async (event) => {
  try {
    const response = await axios.get(url);
    const responseData = response.data;
    const title = responseData.products.map((product) => product.title);
    // console.log("Success to get product from API");

    // Receive query param in URL like dev/axiostrigger?n=2
    const n = event.queryStringParameters && event.queryStringParameters.n;
    const selectedTitle = title[n];
    const responseBody = { axiostriggerResult: selectedTitle };
    console.log(responseBody);
    return responseBody;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 503,
      body: JSON.stringify({
        message: "Web service unavailable",
      }),
    };
  }
};
