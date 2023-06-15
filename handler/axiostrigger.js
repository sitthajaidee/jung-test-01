const axios = require("axios");

const url = "https://dummyjson.com/products";

module.exports.axiostrigger = async (event) => {
  try {
    const response = await axios.get(url);
    const responseData = response.data;
    const title = responseData.products.map((product) => product.title);
    console.log(title);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
