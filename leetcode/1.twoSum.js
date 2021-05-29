
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

//  

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const eg1 = {
    arr: [5, 8, 3, 2, 4],
    target: 6
}
let count = 0;
/**
 *
 * @param {*} nums
 * @param {*} target
 * @returns [num1, num2]
 */
// function twoSum(nums, target) {
//     const sum = {};
//     const length = nums.length;
//     for (let i = 0; i < length; i++) {
//         count++;
//         const curV = nums[i];
//         if (sum[curV] !== undefined) {
//             return [i, sum[curV]];
//         }
//         sum[target - curV] = i;
//     }
//     return [];
// }
// count = 0;
// console.log(
//     twoSum(eg1.arr, eg1.target),
//     count
// );


function twoSum2(nums, target) {
    if (!nums || nums.left < 2) {
        return [];
    }
    nums.sort((a, b) => a - b);
    console.log(nums);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const r = nums[left] + nums[right]
        console.log(r, nums[left], nums[right], left, right);
        if (r === target) {
            return [left, right];
        }
        else if (r > target) {
            right --;
        }
        else {
            left ++;
        }
    }
}
count = 0;
console.log(
    twoSum2(eg1.arr, eg1.target),
    count
);