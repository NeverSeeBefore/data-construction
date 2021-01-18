// 青蛙跳台阶
// 一个青蛙 一次跳1级或两级；
// 问 青蛙跳上 n级 台阶，有几种方法；

// 跳上 n级 台阶 可以转化位两个子问题： 跳上n-1级台阶的方法 和 跳上n-2级台阶的方法
function jump(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return jump(n - 1) + jump(n - 2);
}

console.log(
    jump(0),
    jump(1),
    jump(2),
    jump(3),
    jump(4),
    jump(5),
    jump(6),
    jump(7),
)