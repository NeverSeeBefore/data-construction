// https://leetcode-cn.com/problems/permutations/
// (排列问题，类型一：元素不重复，不可复选)
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 输入：nums = [1]
// 输出：[[1]]

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同

/**
 *
 * @param {number[]} nums
 * @param {number[]} track
 */
const permute = function (nums) {
  const res = [];
  const track = [];
  const used = new Array(nums.length).fill(false);

  const _backTrack = function (nums) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      track.push(nums[i]);
      used[i] = true;
      _backTrack(nums, i);
      used[i] = false;
      track.pop();
    }
  };

  _backTrack(nums);
  return res;
};

console.log(permute([1]));
console.log(permute([0, 1]));
console.log(permute([1, 2, 3]));
