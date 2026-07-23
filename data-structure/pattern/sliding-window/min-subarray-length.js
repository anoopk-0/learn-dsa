/*
- Problem
-
- *Given an array of positive integers, find the minimum length of a
- *contiguous subarray whose sum is greater than or equal to target.
- *This uses dynamic (variable-size) sliding window.
-
- *Example 1 Input: arr = [2, 3, 1, 2, 4, 3], target = 7
-
- *Output: 2
*/

function minSubArrayLength(arr, target) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  // Expand the window
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    // Shrink the window while it is valid
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);

      sum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));
