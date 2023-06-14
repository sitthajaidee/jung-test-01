"use strict";

module.exports.hello = async (event) => {
  console.log("Test write log before return");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is from dev branch test action",
      input: event,
    }),
  };
  console.log("Test write log after return");
};
