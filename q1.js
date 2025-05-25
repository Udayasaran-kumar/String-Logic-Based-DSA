function firstNonRepeatingChar(s) {
  if (!s || s.length === 0) return '1';

  const freq = new Map();
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let char of s) {
    if (freq.get(char) === 1) return char;
  }

  return '1';
}

console.log(firstNonRepeatingChar("leetcode"));

function groupAnagrams(words) {
  if (!Array.isArray(words) || words.length === 0) return [];

  const map = new Map();

  for (let word of words) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


function longestPalindrome(s) {
  if (!s || s.length < 1) return "";

  let start = 0, end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  }

  for (let i = 0; i < s.length; i++) {
    const [l1, r1] = expandAroundCenter(i, i);     
    const [l2, r2] = expandAroundCenter(i, i + 1); 

    if (r1 - l1 > end - start) [start, end] = [l1, r1];
    if (r2 - l2 > end - start) [start, end] = [l2, r2];
  }

  return s.slice(start, end + 1);
}
console.log(longestPalindrome("babad"));