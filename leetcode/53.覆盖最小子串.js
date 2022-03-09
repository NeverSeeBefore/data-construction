// https://leetcode-cn.com/problems/permutation-in-string/

// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

// 换句话说，s1 的排列之一是 s2 的 子串 。

// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").

// 输入：s1= "ab" s2 = "eidboaoo"
// 输出：false

// 1 <= s1.length, s2.length <= 104
// s1 和 s2 仅包含小写字母

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const need = new Map();
  const win = new Map();
  let valid = 0;
  let left = 0;
  let right = 0;
  for (const one of s1) {
    need.set(one, (need.get(one) || 0) + 1);
  }

  while (right < s2.length) {
    const c = s2[right];
    right++;
    if (need.has(c)) {
      win.set(c, (win.get(c) || 0) + 1);
      if (win.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (valid === need.size) {
      if (right - left === s1.length) {
        return true;
      }
      const d = s2[left];
      left ++;
      if (need.has(d)) {
        win.set(d, win.get(d) - 1);
        if (win.get(d) < need.get(d)) {
          valid--;
        }
      }
    }
  }
  return false;
};

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
