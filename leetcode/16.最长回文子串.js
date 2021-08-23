// https://www.nowcoder.com/practice/b4525d1d84934cf280439aeecc36f4af?tpId=188&&tqId=38608&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 描述
// 对于一个字符串，请设计一个高效算法，计算其中最长回文子串的长度。

// 给定字符串A以及它的长度n，请返回最长回文子串的长度。

// 示例1
// 输入：
// "abc1234321ab",12

// 返回值：
// 7

/**
 * 中心扩散法求解
 * @param { string } A
 * @param { number } n
 */
function getLongestPalindrome(A, n) {
    if (n <= 1) {
        return n;
    }

    /**
     * 根据起始和结束下标，判断最长回文；
     * @param {*} A 
     * @param {*} start 
     * @param {*} end 
     */
    function _helper(A, start, end) {
        while (start >= 0 && end <= A.length) {
            if (A[start] !== A[end]) {
                break;
            }
            start--; end++;
        }
        // 正常来说 回文字符串等于 end - start + 1； 比如 start = 3， end = 4， len = 2 = end - start + 1
        // 但是 while之后 start 和 end 都会向外多移动一次，所以需要减去2；
        return end - start + 1 - 2;
    }

    // write code here
    let max = 0;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, _helper(A, i, i), _helper(A, i, i + 1));
    }
    return max;
}

module.exports = {
    getLongestPalindrome
}

console.log(
    getLongestPalindrome('abc1234321ab', 12)
);