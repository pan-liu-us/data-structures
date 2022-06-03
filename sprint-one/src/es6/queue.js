// The ES6 Pattern

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count - this.lowestCount === 0) {
      return undefined;
    }
    var result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }

}
