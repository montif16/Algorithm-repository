"use strict";

export function binarySearchRecursive(search, values, start, end, iterations) {
  if (start > end) {
    return { found: false, index: -1, iterations: iterations + 1 };
  }

  // placeholder until next step
  return { found: false, index: -1, iterations: iterations + 1 };
}
