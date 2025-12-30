import { merge } from "./mergesort.js";
import { mergeSort } from "./mergesort.js";

console.log("case 1:", merge([1, 3, 5], [2, 4, 6]));
console.log("case 2:", merge([1, 2], []));
console.log("case 3:", merge([], [3, 4]));
console.log("case 4:", merge([1, 4, 9], [2, 2, 3, 10]));

console.log(mergeSort([]));
console.log(mergeSort([5]));
console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
