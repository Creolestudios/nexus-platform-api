// Stripe billing webhook handler
const express = require('express');
const router = express.Router();

router.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];
  res.json({ received: true });
});

module.exports = router;
