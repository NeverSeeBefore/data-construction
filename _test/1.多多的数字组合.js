// 多多君最近在研究某种数字组合：
// 定义为：每个数字的十进制表示中(0~9)，每个数位各不相同且各个数位之和等于N。
// 满足条件的数字可能很多，找到其中的最小值即可。
// 多多君还有很多研究课题，于是多多君找到了你--未来的计算机科学家寻求帮助。

// 输入描述:
// 共一行，一个正整数N，如题意所示，表示组合中数字不同数位之和。
// （1 <= N <= 1,000）

// 输出描述:
// 共一行，一个整数，表示该组合中的最小值。
// 如果组合中没有任何符合条件的数字，那么输出-1即可。

// 输入例子1:
// 5

// 输出例子1:
// 5

// 例子说明1:
// 符合条件的数字有：5，14，23，32，41
// 其中最小值为5

function solution(target) {

    if (target > 45 || target < 0) {
        return -1;
    }
    if (target < 10) {
        return target;
    }
    var sum = 0;
    var rest = target;
    var times = 0;
    for (var i = 9; i > 0; i --) {
        if (i <= rest) {
            rest -= i;
            sum += i * Math.pow(10, times);
            times ++;
        }
        if (rest < 0) {
            return -1;
        }
        if (rest === 0) {
            return sum;
        }
    }
}

console.log(
    solution(18)
);

// 不要想的太复杂，其实就是 位数越少越好 --> 数字越大约好 -->

// target < 10        -->  n ( 0 < n < 10)
// 10 < target <= 17  -->  9 + n ( 0 < n < 9)
// 17 < target <= 24  -->  9 + 8 + n ( 0 < n < 8)
// ......