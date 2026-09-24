const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { eventId, tenantId, payload } = req.body;
  if (!eventId || !tenantId) {
    return res.status(400).json({ error: 'Missing required fields: eventId, tenantId' });
  }
  res.status(201).json({ status: 'queued', eventId, timestamp: new Date().toISOString() });
});

module.exports = router;
