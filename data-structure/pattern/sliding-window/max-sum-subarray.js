/*
- Problem
-
- *Given an array and an integer k, find the maximum sum of any
- *contiguous subarray of size k.
-
- *Example 1 Input: arr = [2, 1, 5, 1, 3, 2], k = 3
-
- *Output: 9
*/

function maxSum(arr, k) {
  // Sum of first window
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    // Remove left element
    windowSum -= arr[i - k];

    // Add new right element
    windowSum += arr[i];

    // Update maximum
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3));
