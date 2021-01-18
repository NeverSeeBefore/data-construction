// 斐波那契数列

// 0 1 1 2 3 5 8  13 21 ...

// 传入第n位，返回第n位的值
// function fibo(n) {
//     if (n === 0 || n === 1) return 0;
//     if (n === 2) return 1;
//     var f1 = 0;
//     var f2 = 1;
//     var res = 0
//     for (var i = 3; i <= n; i++) {
//         res = f1 + f2;
//         f1 = f2;
//         f2 = res;
//     }
//     return res;
// }

function fibo(n) {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

console.log(
    fibo(0),
    fibo(1),
    fibo(2),
    fibo(3),
    fibo(4),
    fibo(5),
    fibo(6),
    fibo(7),
)