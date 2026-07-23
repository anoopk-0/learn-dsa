/*
- Problem
-
- *Write a function to reverse a string using a two-pointer approach.
-
- *Example 1 Input: "Hello"
-
- *Output: "olleH"
*/

function reverseString(str) {
  const arr = str.split('');

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // [arr[left], arr[right]] = [arr[right], arr[left]];
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join('');
}

console.log(reverseString('Hello'));
