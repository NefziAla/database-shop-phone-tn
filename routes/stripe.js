const router = require("express").Router();
const stripe = require("stripe")("sk_test_51KFgIDCgP4h51at9ZfOhOhgclPQTsOJPyCBEcupgcyXjlgdKdfvCj1x3Hy7noeip91AlO626m9joCOAbaGwfLPRT00P39AQXwv");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: "tok_mastercard",
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;