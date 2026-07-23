/**
 * Given a 1-indexed array of integers numbers that is sorted in non-decreasing order, find two numbers such that they add up to a specific target.

Return the indices of the two numbers (1-indexed) as an array [index1, index2].
--

Input:
numbers = [2,7,11,15]
target = 9

Output:
[1,2]

---

O(n) time
O(1) extra space?

NOTE: Need 2 numbers? → Think HashMap (if unsorted) or Two Pointers (if sorted).
 */

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Have we seen the complement before?
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // Store current number and its index
    map.set(nums[i], i);
  }

  return [];
}

// Test
console.log(twoSum([11, 2, 15, 7], 9)); // [1, 3]
