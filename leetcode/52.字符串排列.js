// https://leetcode-cn.com/problems/minimum-window-substring/

// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

// 输入：s = "a", t = "a"
// 输出："a"

// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。

// 1 <= s.length, t.length <= 105
// s 和 t 由英文字母组成

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const sLength = s.length;
  const tLength = t.length;
  // 需要匹配的字符及对应数量
  const need = new Map();
  // 当前窗口包含匹配的字符及数量
  const win = new Map();
  // 窗口左边界
  let left = 0;
  // 窗口又边界
  let right = 0;
  // 有几个字符匹配够数了
  let valid = 0;
  // 最佳匹配子串 起始位置
  let start = 0;
  // 最佳匹配子串 长度
  let len = sLength + 1;

  for (let char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }
  // console.log("need", need, need.size);
  while (right < s.length) {
    const char = s[right];
    // console.log(`s${right}: ${char}`);
    right++;
    if (need.has(char)) {
      // console.log("win", win);
      win.set(char, (win.get(char) || 0) + 1);
      if (win.get(char) === need.get(char)) {
        valid++;
      }
    }
    while (need.size === valid) {
      if (right - left < len) {
        start = left;
        len = right - start;
      }
      const leftChar = s[left];
      left++;
      if (need.has(leftChar)) {
        win.set(leftChar, win.get(leftChar) - 1);
        if (win.get(leftChar) < need.get(leftChar)) {
          valid--;
        }
      }
    }
  }
  // console.log(start, len);
  return len > sLength ? "" : s.substr(start, len);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("aa", "a"));
