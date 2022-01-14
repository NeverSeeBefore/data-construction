// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/


// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
  if (nums.length === 0) {
      return [-1, -1];
  }
  let left = 0,
      right = nums.length - 1;
  while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (nums[mid] === target) {
          let r1 = r2 = mid;
          while(nums[r1 - 1] === target) {
              r1 --;
          }
          while(nums[r2 + 1] === target) {
              r2 ++;
          }
          return [r1, r2]
      } else if (nums[mid] < target) {
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      }
  }

  return [-1, -1];
};