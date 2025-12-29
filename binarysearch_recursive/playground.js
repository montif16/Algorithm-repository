import { binarySearchRecursive } from "./binarySearchRecursive.js";

const values = [1, 3, 5, 7, 9, 11, 13];

function run(search) {
  console.log("\nsearch =", search);
  const result = binarySearchRecursive(search, values, 0, values.length - 1, 0);
  console.log("result =", result);
}

run(7);
run(8);
run(1);
run(13);
