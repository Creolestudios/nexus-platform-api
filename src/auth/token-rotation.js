/**
 * Enterprise Token Rotation Service
 * Implements RFC 6749 Section 6 refresh token rotation with reuse detection.
 */
const crypto = require('crypto');
const redis = require('../lib/redis');

class TokenRotationService {
  constructor(ttlSeconds = 604800) {
    this.ttl = ttlSeconds;
  }

  async rotateRefreshToken(familyId, oldTokenHash, newTenantContext) {
    const existing = await redis.get(`token_family:${familyId}`);
    if (existing && existing !== oldTokenHash) {
      // Possible token theft detected: invalidate entire token family
      await redis.del(`token_family:${familyId}`);
      throw new Error('SECURITY_BREACH_DETECTED: Token family invalidated');
    }

    const newRefreshToken = crypto.randomBytes(32).toString('hex');
    const newHash = crypto.createHash('sha256').update(newRefreshToken).digest('hex');
    await redis.setex(`token_family:${familyId}`, this.ttl, newHash);

    return { refreshToken: newRefreshToken, familyId };
  }
}

module.exports = new TokenRotationService();
