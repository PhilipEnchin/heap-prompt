'use strict';

class MaxHeap {
  constructor() {
    this.storage = [];
    this.placeholder = 'FIXME'; // Remove this line
  }

  // Implement this method
  insert(/* n */) { return this.placeholder; }

  // Implement this method
  extract() { return this.placeholder; }

  // Implement this method
  peek() { return this.placeholder; }

  // Implement this method
  size() { return this.placeholder; }

  childIndexLeft(i) {
    const leftChildIndex = 2 * i + 1;
    return leftChildIndex < this.size() ? leftChildIndex : undefined;
  }

  childIndexRight(i) {
    const rightChildIndex = 2 * i + 2;
    return rightChildIndex < this.size() ? rightChildIndex : undefined;
  }

  parentIndex(i) {
    const parentIndex = Math.floor((i - 1) / 2);
    return i > 0 && i < this.size() ? parentIndex : undefined;
  }

  childValueLeft(i) { return this.storage[this.childIndexLeft(i)]; }

  childValueRight(i) { return this.storage[this.childIndexRight(i)]; }

  parentValue(i) { return this.storage[this.parentIndex(i)]; }

  toString(i = 0) {
    const children = [];
    const leftChildIndex = this.childIndexLeft(i);
    const rightChildIndex = this.childIndexRight(i);
    if (leftChildIndex) { children.push(this.toString(leftChildIndex)); }
    if (rightChildIndex) { children.push(this.toString(rightChildIndex)); }
    return `${this.storage[i]}${children.length ? `(${children})` : ''}`;
  }
}

module.exports = MaxHeap;
