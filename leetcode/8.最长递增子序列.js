// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//  
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
//  

// 提示：

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
//  

// 进阶：

// 你可以设计时间复杂度为 O(n2) 的解决方案吗？
// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?

var LIS = function (nums) {
    if (nums.length <= 1) return nums.length;
    var length = nums.length;
    var resArr = new Array(length);
    resArr[0] = {
        length: 1,
        arr: [nums[0]]
    };
    for(var i = 1; i < length; i ++) {
        var curNum = nums[i];
        var curRes = {
            length: 1,
            arr: [curNum]
        };
        for(j = 0; j < i; j ++) {
            // console.log(i, j, curNum, nums[j], resArr[j], curNum > nums[j]);
            if (curNum > nums[j] && resArr[j].length + 1 > curRes.length) {
                curRes.length = resArr[j].length + 1;
                curRes.arr = [...resArr[j].arr, curNum];
            }
        }
        resArr[i] = curRes;
    }
    return Math.max(...resArr.map(item => item.length));
}

var LIS_2 = function (nums) {
    if (nums.length <= 1) return nums.length;
    var length = nums.length;
    var resArr = new Array(length).fill(1);
    for(var i = 1; i < length; i ++) {
        for(j = 0; j < i; j ++) {
            if (nums[i] > nums[j] && resArr[j] + 1 > resArr[i]) {
                resArr[i] = resArr[j] + 1;
            }
        }
    }
    return Math.max(...resArr);
}

const test = function(nums) {
    const dp = new Array(nums.length).fill(1);
    for(let i = 0; i < nums.length; i ++) {
        for(var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

console.log(
    LIS([10,9,2,5,3,7,101,18])
);
console.log(
    LIS([0,3,1,6,2,2,7])
);
console.log(
    LIS([0])
);

console.log(
    LIS_2([10,9,2,5,3,7,101,18])
);
console.log(
    LIS_2([0,3,1,6,2,2,7])
);
console.log(
    LIS_2([0])
);

console.log('---')
console.log(test([10,9,2,5,3,7,101,18]));
console.log(test([0,3,1,6,2,2,7]));
console.log(test([0]));
console.log('---')