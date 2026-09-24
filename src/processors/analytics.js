// Analytics batch processor with explicit listener cleanup
class DataProcessor {
  constructor() {
    this.batchQueue = [];
  }

  processBatch(batch) {
    this.batchQueue.push(batch);
  }
}
module.exports = DataProcessor;
