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


function GetLeastNumbers_Solution(input, k) {
    if (input.length <= k) {
        return input.sort((a, b) => a - b);
    }
    // write code here
    const res = [];
    let maxInRes = -1;
    for (let i = 0; i < input.length; i++) {
        if (res.length < k) {
            res.push(input[i]);
            input[i] > maxInRes && (maxInRes = input[i]);
        }
        else if (input[i] < maxInRes){
            res[res.indexOf(maxInRes)] = input[i];
            maxInRes = Math.max(...res);
        }
    }
    return res.sort((a, b) => a - b);
}

console.log(
    GetLeastNumbers_Solution([4,5,1,6,2,7,3,8], 0)
);


console.log(
    GetLeastNumbers_Solution([4,5,1,6,2,7,3,8,1,1], 4)
);