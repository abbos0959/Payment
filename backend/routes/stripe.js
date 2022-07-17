const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(
   "sk_test_51LMSfkE0JeCa3MZFfmcWrCjEg4EEYpChHkroJpoCnD50sHI9hl69iTbZvQQvMacFO6yRrbOG8KPsnslTN3EuUOTa00ZUjRqflp"
);

router.post("/create-checkout-session", async (req, res) => {
const  line_items=req.body.cartItems.map((value)=>{
    return  {
        price_data: {
           currency: "usd",
           product_data: {
              name: value.name,
              images:[value.image],
              description:value.desc,
              metadata:{
                id:value.id
              }

           },
           unit_amount: value.price*100,
        },
        quantity: value.cartQuantity,
     }

})

   const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: "http://localhost:3000/checkout-success",
      cancel_url: "http://localhost:3000/cart",
   });
   res.send({ url: session.url });
});

module.exports = router;
