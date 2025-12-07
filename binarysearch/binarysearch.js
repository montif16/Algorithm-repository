"use strict";

function binarySearch(searchFor, values) {
    let low = 0;
    let high = values.length - 1;
    let iterations = 0;

    while (low <= high) {
        iterations++;

        const mid = Math.floor((low + high) / 2);
        const value = values[mid];

        if (value === searchFor) {
            return {
                found: true,
                index: mid,
                iterations
            };
        }

        // If the array is NOT sorted, this might behave strangely,
        // but that's allowed as long as we don't infinite-loop.
        if (value < searchFor) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // Not found
    return {
        found: false,
        index: -1,
        iterations
    };
}

module.exports = { binarySearch };
