// https://www.nowcoder.com/practice/64b4262d4e6d4f6181cd45446a5821ec?tpId=188&&tqId=38556&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 描述
// 假设你有一个数组，其中第\ i i 个元素是股票在第\ i i 天的价格。
// 你有一次买入和卖出的机会。（只有买入了股票以后才能卖出）。请你设计一个算法来计算可以获得的最大收益。
// 示例1
// 输入：
// [1,4,2]
// 返回值：
// 3

// 示例2
// 输入：
// [2,4,1]
// 返回值：
// 2

/**
  *
  * @param prices int整型一维数组
  * @return int整型
  */
function maxProfit(prices) {
    // write code here
    if (prices.length < 2) {
        return 0;
    }
    let min = prices[0];
    // let max = -Infinity;
    let res = 0;
    for(let i = 1; i < prices.length; i ++) {
        if (prices[i] > min) {
            res = Math.max(prices[i] - min, res);
        }
        else if (prices[i] < min) {
            min = prices[i];
        }
    }
    return res;
}
module.exports = {
    maxProfit: maxProfit
};

console.log(
    maxProfit([1,4,2])
);

console.log(
    maxProfit([2,4,1])
);