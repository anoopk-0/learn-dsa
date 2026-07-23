/*
- Problem
-
- *Given a sorted array and a target value, find the indices of two
- *numbers whose sum equals the target.
-
- *Example 1 Input: [2, 7, 11, 15], target = 9
-
- *Output: [0, 1]
*/

function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return [left, right];

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
