# Two Pointers Pattern

The Two Pointers pattern uses two references to iterate through a data structure (usually an array or linked list) from different positions. This technique is efficient for solving problems involving:

- Finding pairs of elements
- Removing duplicates
- Reversing sequences
- Sorting partitions

### When to Use

- **Sorted arrays/lists**: Elements are ordered, allowing efficient searching
- **Paired elements**: Need to find specific relationships between elements (sums, differences, etc.)
- **Space-constrained problems**: Want to modify arrays in-place without extra space
- **Two-way traversal**: Need to process data from both ends simultaneously

### Core Concept

Instead of using nested loops (O(n²)), use two pointers moving at different speeds or directions:

- **Opposite ends**: Start from beginning and end, move toward center
- **Same direction**: Both move forward at different speeds
- **Sliding window**: Move pointers to maintain a window of elements

## Time & Space Complexity

- **Time Complexity**: O(n) - single or double pass through data
- **Space Complexity**: O(1) - no extra data structures needed (in-place operations)

## Common Patterns

### 1. Opposite Direction (Start & End)

```javascript
// Reverse or find pairs
let left = 0,
  right = arr.length - 1;
while (left < right) {
  // Process elements
  left++;
  right--;
}
```

### 2. Same Direction (Different Speeds)

```javascript
// Remove duplicates, merge arrays
let slow = 0,
  fast = 1;
while (fast < arr.length) {
  if (condition) {
    arr[slow] = arr[fast];
    slow++;
  }
  fast++;
}
```

### 3. Sliding Window

```javascript
// Fixed or variable-size window
let left = 0;
for (let right = 0; right < arr.length; right++) {
  while (condition) {
    left++;
  }
  // Process window
}
```

## Common Applications

| Problem                   | Pattern        | Approach                                      |
| ------------------------- | -------------- | --------------------------------------------- |
| Two Sum (Sorted)          | Opposite       | Start from both ends, adjust based on sum     |
| Reverse String            | Opposite       | Swap elements while moving inward             |
| Valid Palindrome          | Opposite       | Compare from both ends, skip non-alphanumeric |
| Remove Duplicates         | Same Direction | Keep unique elements at front                 |
| Merge Sorted Arrays       | Same Direction | Compare elements from both arrays             |
| Container with Most Water | Opposite       | Move inward, track max area                   |
| Longest Common Prefix     | Same Direction | Compare character by character                |

### Implementation Tips

1. Clarify the problem constraints (sorted? unique? range?)
2. Choose pointer starting positions strategically
3. Define clear termination conditions
4. Test edge cases (empty, single element, all duplicates)
5. Verify in-place modifications don't lose data
