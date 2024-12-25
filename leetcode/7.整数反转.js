/*
 * @lc app=leetcode.cn id=7 lang=javascript
 * @lcpr version=20004
 *
 * [7] 整数反转
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var res = 0;
    var stop = 10;
    while (x !== 0 && stop !== 0) {
        var tail = x % 10;
        x = ~~(x / 10);
        
        res = res * 10 + tail;
        if (res > 2147483647 || res < -2147483648) {
            return 0;
        }
        stop --;
    }
    return res;
};
// console.log(reverse(123));
// console.log(reverse(-321));
// console.log(reverse(21));
// console.log(reverse(0));

// @lc code=end



/*
// @lcpr case=start
// 123\n
// @lcpr case=end

// @lcpr case=start
// -123\n
// @lcpr case=end

// @lcpr case=start
// 120\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */

