'use strict';

const MaxHeap = require('./heap');

const heap = new MaxHeap(); // Create a heap to play with
heap.insert(5); //
heap.insert(2); //
heap.insert(7); //
heap.insert(4); // Do some stuff to it
heap.insert(1); //
heap.insert(6); //
heap.insert(3); //
console.log(heap.toString()); // Have a look at it
console.log(`${heap}`); // Or, have an ES6 look at it
