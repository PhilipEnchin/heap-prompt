# A Heap of JavaScript

## Your mission
Your job is to implement a max-heap class. Complete methods `insert()`, `extract()`, `peek()`, and `size()`

### A heap?
A max-heap can be thought of as a binary tree where every non-leaf node is greater than or equal to its children. However, you should implement this class using a simple, one-dimensional array for storage. A `storage` array is provided.

### Using an array to represent a heap
To transfer your mental image of a binary tree into a mental image of an array, think of the array indices as the numbers you get if you do a breadth-first count. That is, the root of the tree is _zero_, the next row down has indices _1_ and _2_, the next has _3_, _4_, _5_ and _6_, etc. In general, a value at array-index _i_ has a parent at _floor((i - 1) / 2)_, and has children at _2i + 1_ and _2i + 2_.

```pla
     9
    / \   <----Binary tree
   /   \
  5     8              Array----> [9, 5, 8, 2, 3, 7, 6]
 / \   / \
2   3 7   6
```

Methods for accessing child/parent indices/values are provided, as is a `toString()` method to help visualize while you work. Feel free to have a look at these methods, but don't muck about with them.

## Heap operations
Generally speaking, inserting into or extrating from a heap involves performing the insertion or extraction in a way that violates heap order, then fixing the heap. The first step should be done in constant time, and the second should be logarithmic.

Inserting into a heap involves pushing the new value onto the end of the `storage` array, then "swimming" it upwards through the heap until its parent (if it has one) is greater than or equal to its value, and any children are less than or equal to its value.

Extracting a value always removes the maximum value in the heap, which is stored at the root, or array-index _zero_. Move the last value in the array to the root, and "sink" it down until its parent (if it has one) is greater than or equal to its value, and any children are less than or equal to its value.

Peeking means getting a look at the maximum value (remember, at the root) without removing it.

## To get started

Fork or clone this repo, whatever you like.

Run `npm install` from your terminal to use [ESLint](https://eslint.org/) while you work. (If you're not into that idea, you can go ahead and remove `.eslintrc.js` and `.gitignore`, and you can run `npm uninstall -D eslint eslint-config-airbnb-base eslint-plugin-import`.)

You can use `scratchpad.js` to play fiddle with the heap. Run `npm start` to see the results in your terminal.

Run `npm test` from your terminal to run tests against your implementation.
