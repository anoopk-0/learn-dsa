/**
 * Input:
nums = [1,1,1,2,2,3]
k = 2

Output:
[1,2]
 */

function findMostFrequencyElements(arr, k) {
  if (!arr.length) return;

  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
}

findMostFrequencyElements([1, 1, 1, 2, 2, 3], 2);
