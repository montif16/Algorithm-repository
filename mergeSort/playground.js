import { merge } from "./mergesort.js";

console.log("case 1:", merge([1, 3, 5], [2, 4, 6]));
console.log("case 2:", merge([1, 2], []));
console.log("case 3:", merge([], [3, 4]));
console.log("case 4:", merge([1, 4, 9], [2, 2, 3, 10]));
