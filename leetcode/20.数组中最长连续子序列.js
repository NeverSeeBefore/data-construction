// https://www.nowcoder.com/practice/eac1c953170243338f941959146ac4bf?tpId=188&&tqId=38566&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 描述
// 给定无序数组arr，返回其中最长的连续序列的长度(要求值连续，位置可以不连续,例如 3,4,5,6为连续的自然数）
// 示例1
// 输入：
// [100,4,200,1,3,2]

// 返回值：
// 4

// 示例2
// 输入：
// [1,1,1]

// 返回值：
// 1





/**
 * max increasing subsequence
 * @param arr int整型一维数组 the array
 * @return int整型
 */
 function MLS( arr ) {
    // write code here
    arr.sort((a, b) => a - b);
    console.log(arr);
    let maxLen = 1;
    let curLen = 1;
    let max = arr[0];
    for(let i = 1; i < arr.length; i ++) {
        const temp = arr[i] - max;
        if (temp < 1) {
            continue;
        }
        if (temp === 1) {
            curLen++;
        }
        if (temp > 1) {
            curLen = 1;
        }
        maxLen = Math.max(curLen, maxLen);
        max = arr[i];
    }
    return maxLen;
}
module.exports = {
    MLS : MLS
};

console.log(
    MLS([100,4,200,1,3,2])
);

console.log(
    MLS([1,1,1])
);