// https://www.nowcoder.com/practice/31c1aed01b394f0b8b7734de0324e00f?tpId=188&&tqId=38549&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 给定一个整形数组arr，已知其中所有的值都是非负的，将这个数组看作一个柱子高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 示例1
// 输入：
// [3,1,2,5,2,4]
// 返回值：
// 5

// 说明：
// 数组 [3,1,2,5,2,4] 表示柱子高度图，在这种情况下，可以接 5个单位的雨水，= 为雨水

// 5    |
// 4    |=|
// 3 |==|=|
// 2 |=||||
// 1 ||||||


// 示例2
// 输入：
// [4,5,1,3,2]
// 返回值：
// 2

/**
 * max water
 * @param arr int整型一维数组 the array
 * @return long长整型
 */
function maxWater(arr) {
    // write code here
    if (arr.length < 3) {
        return 0;
    }
    const length = arr.length;
    // 左侧柱子索引
    let left = 0;
    // 右侧柱子索引
    let right = length - 1;
    let water = 0;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        leftMax = Math.max(arr[left], leftMax);
        rightMax = Math.max(arr[right], rightMax);
        // console.log('^', left, right, leftMax, rightMax, '|', water, '|', arr[left  + 1], arr[right - 1]);
        if (leftMax < rightMax) {
            water += leftMax - arr[left++];
            // console.log('<', water, leftMax, arr[left - 1]);
        }
        else {
            water += rightMax - arr[right--];
            // console.log('>', water, rightMax, arr[right + 1]);
        }
        // console.log('-', water, leftMax, rightMax);

    }
    return water;
}
module.exports = {
    maxWater: maxWater
};

console.log(
    maxWater([3,1,2,5,2,4])
);
console.log(
    maxWater([4,5,1,3,2])
);
