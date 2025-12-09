// ## Question 1.1: Array Manipulation - Remove Duplicates
// **Difficulty:** ⭐ Easy
// **Time:** 15 minutes
// **Very Common:** Almost every interview

// ### Task
// Write a function that removes duplicates from an array and returns a new array with unique values.

// ```javascript
// // Input: [1, 2, 2, 3, 4, 4, 5]
// // Output: [1, 2, 3, 4, 5]

// Solution
function removeDuplicates(arr: Iterable<unknown> | null | undefined) {
  return [...new Set(arr)];
}

// ### Explanation
// The function `removeDuplicates` takes an array as input and uses a `Set` to automatically filter out duplicate values, since a `Set` only stores unique values. The spread operator (`...`) is then used to convert the `Set` back into an array, which is returned as the output.

// ### Complexity Analysis
// - **Time Complexity:** O(n), where n is the number of elements in the input array. This is because creating a `Set` from an array involves iterating through the array once.
// - **Space Complexity:** O(n) in the worst case, where all elements are unique and need to be stored in the `Set`.

// ### Example Usage
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(inputArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

export { removeDuplicates };

function removeDuplicatesTwo(arr: Iterable<unknown> | null | undefined) {
  return Array.from(new Set(arr));
}
// ### Explanation
// The function `removeDuplicatesTwo` works similarly to `removeDuplicates`, but instead of using the spread operator, it uses `Array.from()` to convert the `Set` back into an array. This method also ensures that only unique values are retained in the output array.

// ### Complexity Analysis
// - **Time Complexity:** O(n), where n is the number of elements in the input array.
// - **Space Complexity:** O(n) in the worst case, where all elements are unique.

// ### Example Usage
const inputArrayTwo = [1, 2, 2, 3, 4, 4, 5];
const uniqueArrayTwo = removeDuplicatesTwo(inputArrayTwo);
console.log(uniqueArrayTwo); // Output: [1, 2, 3, 4, 5]

export { removeDuplicatesTwo };
