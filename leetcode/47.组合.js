// https://leetcode-cn.com/problems/combinations/
// (组合问题，类型一：元素无重复，不可复选)


// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 输入：n = 1, k = 1
// 输出：[[1]]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const res = [];
  const track = [];
  if (k === 0) {
    return [];
  }

  const _backTrack = function (start) {
    if (track.length === k) {
      res.push([...track]);
      return;
    }

    for (let i = start; i <= n; i++) {
      track.push(i);
      _backTrack(i + 1);
      track.pop(i);
    }
  };

  _backTrack(1);
  return res;
};

// console.log(combine(4, 3));
// console.log(combine(4, 2));
// console.log(combine(4, 1));
// console.log(combine(4, 0));
console.log(combine(3, 2));
// console.log(combine(1, 1));
