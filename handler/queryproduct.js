module.exports.queryproduct = async (event) => {
  const inputFromAxiostrigger = event.selectedTitle;
  console.log(JSON.stringify(inputFromAxiostrigger));

  return {
    // statusCode: 200,
    body: JSON.stringify({
      message: "This is input from axiostrigger " + inputFromAxiostrigger,
    }),
  };
};
