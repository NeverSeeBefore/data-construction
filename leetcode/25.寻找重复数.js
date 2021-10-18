// https://leetcode.com/problems/find-the-duplicate-number/

// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。

// 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

// 你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。

// 示例 1：

// 输入：nums = [1,3,4,2,2]
// 输出：2
// 示例 2：

// 输入：nums = [3,1,3,4,2]
// 输出：3
// 示例 3：

// 输入：nums = [1,1]
// 输出：1
// 示例 4：

// 输入：nums = [1,1,2]
// 输出：1

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return fast;
};

console.log(findDuplicate([1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
console.log("---");
console.log(findDuplicate([3, 1, 3, 4, 2]));

// /**
//  *
//  * @param {number[]} arr
//  * @returns {number}
//  */
//  function findDuplicate(arr) {
//     var slow = arr[0];
//     var fast = arr[1];
//     console.log(slow, fast);
//     while(fast !== slow) {
//         slow = arr[slow];
//         fast = arr[arr[fast]];
//         console.log(slow, fast);
//     }
//     var entry = 0;
//     while(entry !== slow) {
//         entry = arr[entry];
//         slow = arr[slow];
//     }
//     return -1
// }

// console.log(
//     findDuplicate([1,10,2,3,4,5,6,7,8,9,1])
// );
