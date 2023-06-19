module.exports.axiostrigger = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: "TEST " + event,
  };

  callback(null, response);
};
