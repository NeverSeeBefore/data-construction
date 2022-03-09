// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

// 1 <= s.length, p.length <= 3 * 104
// s 和 p 仅包含小写字母

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const need = new Map();
  const win = new Map();
  let valid = 0;
  let left = 0;
  let right = 0;
  const res = [];
  for (const one of p) {
    need.set(one, (need.get(one) || 0) + 1);
  }
  while (right < s.length) {
    const c = s[right];
    right++;
    if (need.has(c)) {
      win.set(c, (win.get(c) || 0) + 1);
      if (win.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (valid === need.size) {
      if (right - left === p.length) {
        res.push(left);
      }
      const d = s[left];
      left++;
      if (need.has(d)) {
        win.set(d, win.get(d) - 1);
        if (win.get(d) < need.get(d)) {
          valid--;
        }
      }
    }
  }
  return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
