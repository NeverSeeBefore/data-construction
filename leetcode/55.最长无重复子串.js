// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let res = 0;
  const win = new Map();
  let left = 0;
  let right = 0;
  while (right < s.length) {
    const c = s[right];
    right++;
    win.set(c, (win.get(c) || 0) + 1);
    while (win.get(c) > 1) {
      const d = s[left];
      left++;
      win.set(d, win.get(d) - 1);
    }
    res = Math.max(res, right - left);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcdefgaqwertyuiop"));
console.log(lengthOfLongestSubstring(" "));
