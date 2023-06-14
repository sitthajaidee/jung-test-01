// goodmorning/handler.js
module.exports.goodmorning = async (event) => {
  // Your code logic for the "goodmorning" function
  console.log("Execute good morning !");
  return {
    statusCode: 200,
    body: JSON.stringify("Good Morning"),
  };
};
