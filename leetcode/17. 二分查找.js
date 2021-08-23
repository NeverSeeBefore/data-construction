// https://www.nowcoder.com/practice/4f470d1d3b734f8aaf2afb014185b395?tpId=188&&tqId=38588&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 输入：
// [1,2,4,4,5],3

// 返回值：
// -1

// 输入：
// [1,1,1,1,1],1

// 返回值：
// 0


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 如果目标值存在返回下标，否则返回 -1
 * @param nums int整型一维数组 
 * @param target int整型 
 * @return int整型
 */
// function search(nums, target) {
//     if (nums.left === 0) {
//         return -1;
//     }
//     let mid = left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//         mid = (left + right) >> 1;
//         console.log(left, mid, right);
//         if (nums[mid] < target) {
//             left = mid + 1;
//         }
//         else if (nums[mid] > target) {
//             right = mid - 1;
//         }
//         else {
//             right = mid;
//         }
//     }

//     if (nums[left] === target) {
//         return left;
//     }
//     console.log(left, mid, right);
//     return -1;
// }

/**
 *
 * @param {Array<number>} nums
 * @param {number} target
 */
function search(nums, target) {
    const length = nums.length;
    if (length === 0 || nums[0] > target || nums[length - 1] < target) {
        return - 1;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] > target) {
            right = mid - 1;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    if (nums[left] === target) {
        return left;
    }
    return -1;
}

module.exports = {
    search: search
};

console.log(search([1, 2, 4, 4, 5], 3));    // -1
console.log(search([1, 1, 1, 1, 1], 1));    // 0
console.log(search([-2, 1, 2], 2));         // 2