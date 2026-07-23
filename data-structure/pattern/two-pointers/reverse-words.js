/*
- Problem
-
- *Given a sentence, reverse the order of the words while preserving
- *the individual words.
-
- *Example 1 Input: "I love Java"
-
- *Output: "Java love I"
*/

function reverseWords(str) {
  const words = str.trim().split(/\s+/);

  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join(' ');
}

console.log(reverseWords('I love Java'));
