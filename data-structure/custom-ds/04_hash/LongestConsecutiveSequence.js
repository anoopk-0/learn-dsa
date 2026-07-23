/**
Problem Statement

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

A consecutive sequence consists of numbers that follow each other with a difference of exactly 1.

Your algorithm must run in O(n) time.
--

Input:
nums = [100,4,200,1,3,2]

Output:
4

---

Outer Loop        = O(n)

All While Loops   = O(n)

Total

O(n) + O(n)

↓

O(2n)

↓

O(n)
 */

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);

  let longest = 0;

  for (const num of set) {
    // Start only at the beginning of a sequence
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
