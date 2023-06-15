const axios = require("axios");

const url = "https://dummyjson.com/products";

module.exports.axiostrigger = async (event) => {
  try {
    const response = await axios.get(url);
    const responseData = response.data;
    const title = responseData.products.map((product) => product.title);
    console.log("Success to get product from API");
    const n = event.queryStringParameters && event.queryStringParameters.n;
    const selectedTitle = title[n];
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: selectedTitle,
      }),
    };
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
