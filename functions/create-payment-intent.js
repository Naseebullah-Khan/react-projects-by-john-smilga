// domain/.netlify/functions/create-payment-intent
exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, totalAmount, shipping } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
