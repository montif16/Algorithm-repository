export function insertionSort(arr) {
  let iterations = 0;

  for (let i = 1; i < arr.length; i++) {
    iterations++;

    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      iterations++;
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

      // Sorted array and number of iterations
    // Insertion sort (shift)
  return {
    arr, iterations
  };
}
