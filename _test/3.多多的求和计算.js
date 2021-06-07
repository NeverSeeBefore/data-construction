// 链接：https://www.nowcoder.com/questionTerminal/877c520f935c4d67a4614dc4bce84a1a?answerType=1&f=discussion
// 来源：牛客网

// 多多路上从左到右有N棵树（编号1～N），其中第i个颗树有和谐值Ai。
// 多多鸡认为，如果一段连续的树，它们的和谐值之和可以被M整除，那么这个区间整体看起来就是和谐的。
// 现在多多鸡想请你帮忙计算一下，满足和谐条件的区间的数量。

// 输入描述:
// 第一行，有2个整数N和M，表示树的数量以及计算和谐值的参数。
// （ 1 <= N <= 100,000, 1 <= M <= 100  ）
// 第二行，有N个整数Ai, 分别表示第i个颗树的和谐值。
// （ 0 <= Ai <= 1,000,000,000 ）


// 输出描述:
// 共1行，每行1个整数，表示满足整体是和谐的区间的数量。
// 示例1
// 输入
// 5 2
// 1 2 3 4 5
// 输出
// 6
// 说明
// 长度为1: [2], [4]
// 长度为2: 无
// 长度为3: [1,2,3], [3,4,5]
// 长度为4: [1,2,3,4], [2,3,4,5]
// 长度为5: 无
// 共6个区间的和谐值之和可以被2整除。

// 备注:
// 对于50%的数据，有N<=1,000
// 对于100%的数据，有N<=100,000

/**
 *
 * @param {number} length
 * @param {number} target
 * @param {number[]} nums
 * @returns number
 */
var resolution = function (length, target, nums) {
    var count = 0;
    for (var i = 0; i < length; i++) {
        var sum = nums[i];
        if (sum % target === 0) {
            console.log(nums[i], sum, sum % target);
            count++;
        }
        for (var j = i + 1; j < length; j++) {
            sum += nums[j];
            if (sum % target === 0) {
                console.log(nums.slice(i, j + 1), sum, sum % target);
                count++;
            }
        }
    }
    return count;
}
console.log(
    resolution(5, 2, [1, 2, 3, 4, 5])
);

/**
 *
 * @param {number} length
 * @param {number} target
 * @param {number[]} nums
 * @returns number
 */
var resolution2 = function (length, target, nums) {
    var count = 0;
    var map = {
        0: 1
    };
    var sum = 0;
    for (var i = 0; i < length; i++) {
        sum += nums[i];
        var key = sum % target;
        map[key] = map[key] || 0;
        // 出现第一次 +0； 出现第二次 + 1； 出现第三次 + 2；。。。
        count += map[key] ++;
        console.log(count, nums[i], map);

    }
    return count;
}

// 第一个解决办法
// 双层循环On^2

// 第二个解决办法
// 一层循环On
// 使用一个对象，存储 前i项的和，出现余数为key的次数，默认 余数为0的出现1次
// 解释
// const map = {
//     0: 1,
//     1: 2
// }
// 前i项 和 余数为 1的情况 有两次， 比如说是前3项 和 前5项的和是 余数是1，那么3 - 5 必然能被target所除
// 再比如
// const map = {
//     0: 1,
//     1: 3，
// }
// 前i项 和 余数为 1的情况 有3次，比如说是前3项、前5项、前7项的和是 余数是1，那么 3-5， 5-7， 3-7 必然是符合条件
// 再比如
// const map = {
//     0: 1,
//     1: 5，
// }
// 前3、5、7、9、11、15项的和是 余数是1
// 那么 两两组合 就是符合条件的和谐数组；1 + 2 + 3 + 4