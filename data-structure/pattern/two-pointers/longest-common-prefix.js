/*
- Problem
-
- \*Write a function to find the longest common prefix among an array of
- strings.
-
- \*If there is no common prefix, return an empty string "".
-
- \*Example 1 Input: ["flower", "flow", "flight"]
-
- _Output: "fl"
*/

function longestCommonPrefix(words) {
  if (!words.length) return '';

  let prefix = '';

  for (let i = 0; i < words[0].length; i++) {
    const ch = words[0][i];

    for (let j = 1; j < words.length; j++) {
      if (i >= words[j].length || words[j][i] !== ch) {
        return prefix;
      }
    }

    prefix += ch;
  }

  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
