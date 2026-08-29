const logger = require('../lib/logger');

async function handleChargeFailed(event) {
  const charge = event.data.object;
  const customerId = charge.customer;
  const failureReason = charge.failure_message || 'Card declined';
  logger.warn('Stripe charge failure event recorded', { chargeId: charge.id, customerId, reason: failureReason });
  return { handled: true, retryScheduled: true };
}

module.exports = { handleChargeFailed };
