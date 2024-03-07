// domain/.netlify/functions/create-payment-intent
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, totalAmount, shipping } = JSON.parse(event.body);

    const calculateOrderAmount = () => shipping + totalAmount;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "USD",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: { msg: error.message },
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
