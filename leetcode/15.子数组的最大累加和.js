// https://www.nowcoder.com/practice/554aa508dd5d4fefbf0f86e5fe953abd?tpId=188&&tqId=38594&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 描述
// 给定一个数组arr，返回子数组的最大累加和
// 例如，arr = [1, -2, 3, 5, -2, 6, -1]，所有子数组中，[3, 5, -2, 6]可以累加出最大的和12，所以返回12.
// 题目保证没有全为负数的数据
// [要求]
// 时间复杂度为O(n)O(n)，空间复杂度为O(1)O(1)

// 示例1
// 输入：
// [1, -2, 3, 5, -2, 6, -1]

// 返回值：
// 12



function maxsumofSubarray(arr) {
    const n = arr.length;
    if (n === 0) return 0;
    if (n === 1) return arr[0];

    let max = arr[0];
    for (let i = 1; i < n; i++) {
        const temp = arr[i - 1] + arr[i];
        if (temp > arr[i]) {
            arr[i] = temp;
        }
        max = max > arr[i] ? max : arr[i];
    }

    return max;
}
console.log(
    maxsumofSubarray([1, -2, 3, 5, -2, 6, -1])
)
console.log(
    maxsumofSubarray([1, 2, -99, 5, -5])
)


