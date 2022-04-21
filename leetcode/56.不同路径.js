// https://leetcode-cn.com/problems/unique-paths/


// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

// 输入：m = 3, n = 7
// 输出：28

// 输入：m = 3, n = 2
// 输出：3
// 解释：
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向下

// 输入：m = 3, n = 3
// 输出：6

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {

    const dp = new Array(m).fill(new Array(n).fill(1));
    // console.log(dp);
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j ++) {
            if (i === 0 || j === 0) {
                dp[i][j] === 1;
            }
            else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

// 或者可以是递归解法
// dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

console.log(uniquePaths(3, 7));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(1, 1));
console.log(uniquePaths(3, 3));