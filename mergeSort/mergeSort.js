"use strict";


export function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  let iterations = 0;

  while (i < left.length && j < right.length) {
    iterations++;

    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    iterations++;
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    iterations++;
    result.push(right[j]);
    j++;
  }

  return { result, iterations };
}

//TODO:
export function mergeSort(arr) {
  return { arr, iterations: 0, sorted: false };
}
