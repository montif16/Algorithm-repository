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
  let iterations = 1;

  if (arr.length <= 1) {
    return { arr, iterations, sorted: true };
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftResult = mergeSort(left);
  const rightResult = mergeSort(right);

  const merged = merge(leftResult.arr, rightResult.arr);

  iterations +=
    leftResult.iterations +
    rightResult.iterations +
    merged.iterations;

  return {
    arr: merged.result,
    iterations,
    sorted: true
  };
}


