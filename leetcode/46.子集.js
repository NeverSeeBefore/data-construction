// https://leetcode-cn.com/problems/subsets/
// (https://labuladong.gitee.io/algo/1/10/)
// (子集问题，类型一： 元素无重复，不可复选)

// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// 输入：nums = [0]
// 输出：[[],[0]]

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// nums 中的所有元素 互不相同

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const res = [];
  const subSet = [];
  const length = nums.length;
  const _backTrack = (nums, start) => {
    // console.log(start, subSet);
    res.push([...subSet]);
    for (let i = start; i < length; i++) {
      subSet.push(nums[i]);
      _backTrack(nums, i + 1);
      subSet.pop();
    }
  };
  _backTrack(nums, 0);
  return res;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
