// The Functional Instantiation with Shared Methods Pattern

var Queue = function() {
  var someInstance = {};
  someInstance.count = 0;
  someInstance.lowestCount = 0;
  someInstance.storage = {};

  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

queueMethods.dequeue = function() {
  if (this.count - this.lowestCount === 0) {
    return undefined;
  }
  var result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
}

queueMethods.size = function() {
  return this.count - this.lowestCount;
}

function extend(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

