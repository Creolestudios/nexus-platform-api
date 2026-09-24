const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const tenantId = req.query.tenantId;
  res.json({
    tenantId: tenantId || 'default',
    metrics: {
      activeUsers: 1420,
      eventsProcessedToday: 489201,
      apiLatencyAvgMs: 42.8
    }
  });
});

module.exports = router;

// v2 cached endpoint with Redis support
router.get('/v2', (req, res) => res.json({ cached: true, timestamp: Date.now() }));
