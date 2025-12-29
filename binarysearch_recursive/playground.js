import { binarySearchRecursive } from "./binarySearchRecursive.js";

const values = [1, 3, 5, 7, 9, 11, 13];

console.log(
  binarySearchRecursive(7, values, 0, values.length - 1, 0)
);
