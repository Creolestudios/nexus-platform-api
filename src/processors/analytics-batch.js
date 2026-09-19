class AnalyticsBatchProcessor {
  constructor(batchSize = 250) {
    this.batchSize = batchSize;
    this.buffer = [];
  }
  push(event) {
    this.buffer.push(event);
    if (this.buffer.length >= this.batchSize) {
      this.flush();
    }
  }
  flush() {
    const batch = this.buffer.splice(0, this.batchSize);
    return batch;
  }
}
module.exports = AnalyticsBatchProcessor;
