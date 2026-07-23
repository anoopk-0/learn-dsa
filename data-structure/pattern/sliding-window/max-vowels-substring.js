/*
- Problem
-
- *Given a string s and an integer k, return the maximum number of vowel
- *letters in any substring of s with length k.
- *Vowels: a, e, i, o, u
-
- *Example 1 Input: s = "abciiidef", k = 3
-
- *Output: 3
*/

function isVowel(char) {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}

function maxVowels(str, k) {
  const chars = str.split('');

  let windowCount = 0;

  // First window
  for (let i = 0; i < k; i++) {
    if (isVowel(chars[i])) {
      windowCount++;
    }
  }

  let maxVowel = windowCount;

  // Slide window
  for (let i = k; i < chars.length; i++) {
    if (isVowel(chars[i - k])) {
      windowCount--;
    }

    if (isVowel(chars[i])) {
      windowCount++;
    }

    maxVowel = Math.max(maxVowel, windowCount);
  }

  return maxVowel;
}

console.log(maxVowels('abciiidef', 3));
