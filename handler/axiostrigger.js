const axios = require("axios");

const url = "https://dummyjson.com/products";

module.exports.axiostrigger = async (event) => {
  try {
    const response = await axios.get(url);
    const responseData = response.data;
    const title = responseData.products.map((product) => product.title);
    console.log("It's WORKING ", title);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: title,
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
