// https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf?tpId=188&tqId=38564&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high-week%2Fquestion-ranking
// 描述
// 给定一个数组，找出其中最小的K个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
// 0 <= k <= input.length <= 10000
// 0 <= input[i] <= 10000

// 示例1
// 输入：
// [4,5,1,6,2,7,3,8],4 

// 返回值：
// [1,2,3,4]

// 说明：
// 返回最小的4个数即可，返回[1,3,2,4]也可以    
// 示例2
// 输入：
// [1],0

// 返回值：
// []

// 示例3
// 输入：
// [0,1,2,1,2],3

// 返回值：
// [0,1,1]


/**
 * 沿用了最小K个数的算法，懒惰
 * @param a int整型一维数组 数组
 * @param n int整型 数组长度
 * @param K int整型 第K大的数
 * @return int整型
 */
function findKth(a, n, K) {
    // write code here
    const res = [];
    let minInRes = Infinity;
    for (let i = 0; i < n; i++) {
        if (res.length < K) {
            res.push(a[i]);
            a[i] < minInRes && (minInRes = a[i]);
        }
        else if (a[i] > minInRes){
            res[res.indexOf(minInRes)] = a[i];
            minInRes = Math.min(...res);
        }
    }
    return minInRes;
}


console.log(
    findKth([4,5,1,6,2,7,3,8,1,1], 10, 2)
);