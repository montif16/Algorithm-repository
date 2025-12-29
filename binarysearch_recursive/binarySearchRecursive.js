"use strict";

export function binarySearchRecursive(search, values, start, end, iterations) {
  if (start > end) {
    return { found: false, index: -1, iterations: iterations + 1 };
  }

  const mid = Math.floor((start + end) / 2);

  if (values[mid] === search) {
    return { found: true, index: mid, iterations: iterations + 1 };
  }

  // Recurse left half
  if (search < values[mid]) {
    return binarySearchRecursive(search, values, start, mid - 1, iterations + 1);
  }

  // Recurse right half
  return binarySearchRecursive(search, values, mid + 1, end, iterations + 1);
}
