// 链接：https://www.nowcoder.com/questionTerminal/78255f37c7dc4f749ceafc8c58206a43?answerType=1&f=discussion
// 来源：牛客网

// 多多君最近在研究字符串之间的变换，可以对字符串进行若干次变换操作:

// 交换任意两个相邻的字符，代价为0。
// 将任意一个字符a修改成字符b，代价为 |a - b|（绝对值）。
// 现在有两个长度相同的字符串X和Y，多多君想知道，如果要将X和Y变成两个一样的字符串，需要的最少的代价之和是多少。


// 输入描述:
// 共三行，第一行，一个整数N，表示字符串的长度。
// （1 <= N <= 2,000）
// 接下来两行，每行分别是一个字符串，表示字符串X和Y。
// （字符串中仅包含小写字母）


// 输出描述:
// 共一行，一个整数，表示将X和Y变换成一样的字符串需要的最小的总代价。
// 示例1
// 输入
// 4
// abca
// abcd
// 输出
// 3
// 说明
// 其中一种代价最小的变换方案：
// 都修改为abcd，那么将第一个字符串X最后一个字符a修改为d，代价为|a - d| = 3。
// 示例2
// 输入
// 4
// baaa
// aabb
// 输出
// 1
// 说明
// 其中一种代价最小的变换方案：
// 首先将第一个字符串通过交换相邻的字符：baaa -> abaa -> aaba，代价为0。
// 然后将第二个字符串修改最后一个字符b：|b - a| = 1。
// 两个字符都修改为aaba，所以最小的总代价为1。
// 示例3
// 输入
// 3
// abc
// xyz
// 输出
// 69

/**
 *
 * @param {string} str1
 * @param string str2
 * @returns number
 */
var transform = function (str1, str2) {
    var num = 0;
    var s1 = str1.split('').sort();
    var s2 = str2.split('').sort();
    var length = s1.length;
    for (var i = 0; i < length; i++) {
        num += Math.abs(s1[i].charCodeAt(0) - s2[i].charCodeAt(0));
        console.log(s1[i], s2[i], num);
    }
    return num;
}

console.log(
    transform('abcd', 'bcde')
);
// 为什么我想不到这么简单的方法