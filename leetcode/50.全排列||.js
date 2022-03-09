// https://leetcode-cn.com/problems/permutations-ii/
// (排列问题，类型二：元素可重复，不可复选)

// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const res = [];
  const track = [];
  // 排序 是为了让相同的元素挨在一起
  const used = new Array(nums.length);
  nums.sort((a, b) => a - b);

  const _backTrack = function (nums, start) {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 当前元素如果已经用过了，就不在使用了
      if(used[i]) {
        continue;
      }

      // 当前的元素 和 前一个元素相同的情况下，如果前一个元素没有用到，则当前元素也不要用，保证顺序.
      // 因为 [1 2 2'] 和 [1 2' 2] 属于相同排列
      // 例如，nums=[1, 2, 2', 2''], 当trank=[1, 2'']是，下此遇到 2、2' 都不必要了，因为 [1, 2'', 2]、 [1, 2'', 2'] 都是相同排列;
      // 即 重复的值，无论怎么交换顺序，都是相同的排列
      // 所以 只要保留第一次的排列即可
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      track.push(nums[i]);
      used[i] = true;
      _backTrack(nums, i + 1);
      used[i] = false;
      track.pop();
    }
  };
  _backTrack(nums, 0);
  return res;
};

console.log(permuteUnique([1, 1, 2]));
// console.log(permuteUnique([1, 2, 2]));
// console.log(permuteUnique([3, 2, 3, 3]));
