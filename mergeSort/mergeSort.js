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

export function mergeSort(arr) {
  if (arr.length <= 1) {
    return {
      arr,
      iterations: 1,
      sorted: true
    };
  }

  return {
    arr,
    iterations: 1,
    sorted: false
  };
}

