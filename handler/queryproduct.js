module.exports.queryproduct = async (event) => {
  const inputFromAxiostrigger = event;
  console.log(inputFromAxiostrigger);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "OK",
    }),
  };
};
