-- Migration: Add composite indexes for high-throughput event queries
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_analytics_tenant_created 
ON analytics_events (tenant_id, created_at DESC);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_subscriptions_status_period 
ON tenant_subscriptions (status, current_period_end);
