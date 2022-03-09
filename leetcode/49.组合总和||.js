// https://leetcode-cn.com/problems/combination-sum-ii/
// (子集问题，类型二：组合 元素可重复，不可复选)

// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  const track = [];
  // 记录track的和
  let trackSum = 0;

  candidates.sort((a, b) => a - b);

  const _backTrack = function (nums, start, target) {
    if (trackSum === target) {
      res.push([...track]);
      return;
    }
    if (trackSum > target) {
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      track.push(nums[i]);
      trackSum += nums[i];
      _backTrack(nums, i + 1, target);
      trackSum -= nums[i];
      track.pop();
    }
  };

  _backTrack(candidates, 0, target);
  return res;
};

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
