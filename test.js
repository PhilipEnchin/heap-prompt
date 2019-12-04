'use strict';

const MaxHeap = require('./heap');

const assert = (expected, actual, testName) => {
  if (expected !== actual) {
    console.error(`FAILED: ${testName}: Expected "${expected}" but got "${actual}"`);
  }
};

class HeapTest extends MaxHeap {
  constructor() {
    super();
    this.computedSize = 0;
  }

  insert(n) {
    super.insert(n);
    this.computedSize += 1;
    this.test();
  }

  extract(expectedExtracted) {
    const actualExtracted = super.extract();
    this.computedSize -= 1;
    assert(expectedExtracted, actualExtracted, 'extract() should return max stored value');
    this.test();
  }

  peek(expectedMax) {
    const maxValue = super.peek();
    assert(expectedMax, maxValue, 'peek() should return max stored value');
    this.test();
  }

  test() {
    this.verifyHeapOrder();
    this.verifySize();
  }

  verifyHeapOrder() {
    assert(
      true,
      !this.storage.some((n, i, arr) => arr[Math.floor((i - 1) / 2)] < n),
      `storage array should be in heap order: [${this}]`
    );
  }

  verifySize() {
    assert(this.computedSize, this.size(), 'size() should be the correct size');
    assert(this.storage.length, this.size(), 'size() should return the storage array length');
  }
}

const heapTest = new HeapTest();
assert(undefined, heapTest.placeholder, 'placeholder property should be removed');
const testValues = [10, 9, 8, 7, 6, 5, 4, 11, 53, 37, 41, 75];
testValues.forEach(n => heapTest.insert(n));
testValues.sort((a, b) => b - a);
while (heapTest.size()) {
  heapTest.peek(testValues[0]);
  heapTest.extract(testValues.shift());
}
