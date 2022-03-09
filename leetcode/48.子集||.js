// https://leetcode-cn.com/problems/subsets-ii
// (子集问题，类型二：子集 元素可重复，不可复选)

// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

// 输入：nums = [0]
// 输出：[[],[0]]

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const res = [];
  const track = [];
  nums.sort((a, b) => a - b);

  const _backTrack = function (nums, start) {
    res.push([...track]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      track.push(nums[i]);
      _backTrack(nums, i + 1);
      track.pop();
    }
  };

  _backTrack(nums, 0);
  return res;
};

console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([1, 2, 2]));
