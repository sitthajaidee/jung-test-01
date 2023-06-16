module.exports.queryproduct = async (event) => {
  const inputFromAxiostrigger = event;
  console.log(JSON.stringify(inputFromAxiostrigger));

  return {
    // statusCode: 200,
    body: JSON.stringify({
      message: "This is input from axiostrigger 03 " + inputFromAxiostrigger,
    }),
  };
};
