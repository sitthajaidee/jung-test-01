module.exports.queryproduct = async (event) => {
  const inputFromAxiostrigger = event.axiostriggerResult;
  console.log(inputFromAxiostrigger);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "This is input from axiostrigger" + inputFromAxiostrigger,
    }),
  };
};
