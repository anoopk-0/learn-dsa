# Sliding Window Pattern

The Sliding Window pattern is an optimization technique used when a problem involves contiguous subarrays or substrings. Instead of recomputing results for every possible window, you reuse previous work by moving the window one step at a time.

### Fixed-Size Sliding Window

Window size is always fixed at `k`. You slide the window one element at a time from left to right.

```java
left = 0;

for (right = k; right < n; right++) {
    // Remove the left element
    remove(arr[left]);
    left++;

    // Add the right element
    add(arr[right]);

    // Process the window
    updateAnswer();
}
```

**Time Complexity**: O(n) - Each element is visited twice (once added, once removed)

**Example**: Find maximum sum of any subarray of size 3

- Array: [2, 1, 5, 1, 3, 2]
- Windows: [2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6
- Answer: 9

### Variable-Size Sliding Window

Window size changes dynamically. The window expands and shrinks based on a condition (constraint).

Two pointers (`left` and `right`) control the window expansion and contraction.

```java
left = 0;

for (right = 0; right < n; right++) {

    // Expand: Add the right element to window
    add(arr[right]);

    // Shrink: While window is invalid, remove from left
    while (window is invalid) {
        remove(arr[left]);
        left++;
    }

    // Window is now valid
    updateAnswer();
}
```

**Time Complexity**: O(n) - Each element enters and leaves the window exactly once

### Common Variable-Size Problems

1. **Find minimum/maximum length of subarray** with a certain property
2. **Find longest substring** without repeating characters
3. **Find minimum window substring** containing all characters
4. **Find subarray with sum** equal to/greater than target

---

## Example: Minimum Subarray Length with Target Sum

**Problem**: Given an array of positive integers, find the minimum length of a contiguous subarray whose sum is greater than or equal to target.

**Input**: arr = [2, 3, 1, 2, 4, 3], target = 7

**Output**: 2 (subarray [4, 3] or [3, 4])

### Step-by-step Process

```
arr = [2, 3, 1, 2, 4, 3]
target = 7

Step 1: right=0, sum=2 (not valid)
[2] ...

Step 2: right=1, sum=5 (not valid)
[2, 3] ...

Step 3: right=2, sum=6 (not valid)
[2, 3, 1] ...

Step 4: right=3, sum=8 (valid!)
[2, 3, 1, 2] - length = 4
Shrink: remove 2, sum = 6 (invalid)

Step 5: right=4, sum=10 (valid!)
[3, 1, 2, 4] - length = 4
Shrink: remove 3, sum = 7 (valid!) - length = 3
Shrink: remove 1, sum = 6 (invalid)

Step 6: right=5, sum=9 (valid!)
[2, 4, 3] - length = 3
Shrink: remove 2, sum = 7 (valid!) - length = 2
Shrink: remove 4, sum = 3 (invalid)

Minimum length found: 2
```

```java
public class VariableSlidingWindow {

    public static int minSubArrayLength(int[] arr, int target) {
        int left = 0;
        int sum = 0;
        int minLength = Integer.MAX_VALUE;

        // Expand the window
        for (int right = 0; right < arr.length; right++) {
            sum += arr[right];

            // Shrink the window while it is valid
            while (sum >= target) {
                minLength = Math.min(minLength, right - left + 1);
                sum -= arr[left];
                left++;
            }
        }

        return minLength == Integer.MAX_VALUE ? 0 : minLength;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 1, 2, 4, 3};
        int target = 7;

        System.out.println(minSubArrayLength(arr, target)); // Output: 2
    }
}
```

## Fixed vs Variable Size Comparison

| Aspect      | Fixed Size                | Variable Size                         |
| ----------- | ------------------------- | ------------------------------------- |
| Window size | Always `k`                | Changes dynamically                   |
| Movement    | One step at a time        | Expand and shrink                     |
| Pointers    | Single loop variable      | Two pointers (left, right)            |
| Loop        | `for (i = k; i < n; i++)` | `for (right = 0; right < n; right++)` |
| Inner loop  | Not needed                | `while (condition)`                   |

### Key Insights

1. **Expand first, then shrink**: Always add elements from the right, then remove from the left if needed
2. **Valid window**: When you exit the shrink loop, the window is always valid
3. **Early termination**: Some problems need processing at every valid window state
4. **Two pointers don't cross**: `left <= right` always holds
