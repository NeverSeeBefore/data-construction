/*
 * @lc app=leetcode.cn id=1705 lang=javascript
 * @lcpr version=20004
 *
 * [1705] 吃苹果的最大数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
    var maxGrowthDay = apples.length;
    var eatenNum = 0;
    var today = 0;
    var stop = false;
    var bucket = [];
    while (!stop) {

        var minDecayIndex = -1;
        var minDecay = Infinity;
        // 今天又熟了几个苹果呀。哪天坏？
        if (today < maxGrowthDay) {
            bucket.push([apples[today], days[today]]);
        }

        var index = 0;
        // 那个苹果快坏了啊，赶紧吃掉。
        while (index < bucket.length) {
            if (bucket[index][0] > 0 && bucket[index][1] > 0) {
                if (bucket[index][1] < minDecay) {
                    minDecay = bucket[index][1];
                    minDecayIndex = index;
                }
                // 更新一下腐烂日期
                bucket[index][1]--;
                index++;
                continue;
            }
            // 清理一下空格子
            bucket.splice(index, 1);
        }

        // 吃吧！
        if (minDecayIndex !== -1) {
            eatenNum++;
            bucket[minDecayIndex][0]--;
        }

        today++
        stop = (bucket.length === 0 && today >= maxGrowthDay); // 吃光了，今年就这样了。
    }
    return eatenNum;
};

// console.log(eatenApples([2, 1, 10], [2, 10, 1]));
// console.log(eatenApples([1, 2, 3, 5, 2], [3, 2, 1, 4, 2]));
// console.log(eatenApples([3, 0, 0, 0, 0, 2], [3, 0, 0, 0, 0, 2]));
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,5,2]\n[3,2,1,4,2]\n
// @lcpr case=end

// @lcpr case=start
// [3,0,0,0,0,2]\n[3,0,0,0,0,2]\n
// @lcpr case=end

 */

