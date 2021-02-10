// 青蛙每次跳1级或两级，跳 n 级台阶有几种跳法

// 贪心算法
// let num = 0;
// function jump(n) {
//     num ++;
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     return jump(n - 1) + jump(n - 2);
// }
// console.log(jump(10)); // 89
// console.log(num); // 109


// 动态规划
num = 0;
function jump(n) {
    const cache = {
        '0': 0,
        '1': 1,
        '2': 2
    };
    function _jump (n) {
        num ++;
        if (cache[n] !== undefined) return cache[n];
        cache[n] = _jump(n - 1) + _jump(n - 2);
        return cache[n];
    }
    return _jump(n);
}
console.log(jump(10)); // 89
console.log(num); // 17



// 贪心算法
// 优点 效率高
// 缺点 无法回溯
// 如果保证局部最优解就是全局最优解，可以用贪心算法