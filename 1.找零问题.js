// 假设你有一家小店，需要找给客户46分前的硬币，你的货柜里只有25分、10分、5分、1分的硬币。
// 如何找零 才能保证 数额正确 并且 硬币数最少？

// Denomination 面额


function exchange(total, denos) {
    if (total <= 0) {
        return [];
    }
    var max = 0;
    for (var i = 0; i < denos.length; i ++) {
        var deno = denos[i];
        if (deno > max && deno <= total) {
            max = deno;
        }
    }
    var result = [max];
    var next = exchange(total - max, denos);
    return result.concat(next);
}

var denos = [25, 10, 5, 1];
console.log(exchange(3, denos));
console.log(exchange(7, denos));
console.log(exchange(46, denos));
console.log(exchange(77, denos));
console.log(exchange(106, denos));
// 贪心算法
// 优点 效率高
// 缺点 无法回溯
// 如果保证局部最优解就是全局最优解，可以用贪心算法