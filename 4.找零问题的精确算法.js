// 假设你有一家小店，需要找给客户46分前的硬币，你的货柜里只有25分、10分、5分、1分的硬币。
// 如何找零 才能保证 数额正确 并且 硬币数最少？

// Denomination 面额
function exchange(total, denos) {
    if (total <= 0) {
        return [];
    }
    var max = 0;
    for (var i = 0; i < denos.length; i++) {
        var deno = denos[i];
        if (deno > max && deno <= total) {
            max = deno;
        }
    }
    var result = [max];
    var next = exchange(total - max, denos);
    return result.concat(next);
}

console.log('exchange');
console.log(exchange(51, [30, 25, 10, 5, 1])); // [30, 10, 1, 1]  非最优解
// 贪心算法
// 优点 效率高
// 缺点 无法回溯
// 如果保证局部最优解就是全局最优解，可以用贪心算法



// 找零
// 第一张 大于 total， change(total, denos.slice(1))
// 第一张 小于等于 total， 分两种情况
//      【第一张，change(total-第一张，denos)】
//      【change(total, denos.slice(1))】;
// 
let num1 = 0;
function change(total, denos) {
    num1 ++;
    if (total < 0) return false;
    if (total === 0) return [];
    if (denos.length < 1) return false;
    const firstCash = denos[0];
    const temp = total - firstCash;
    let result;
    if (temp === 0) {
        result = [firstCash];
    } else if (temp < 0) {
        result = change(total, denos.slice(1));
    } else {
        const res1 = change(temp, denos);
        const res2 = change(total, denos.slice(1));
        if (!res1) {
            result = res2;
        } else if (!res2) {
            return [firstCash].concat(res1);
        } else {
            result = res1.length + 1 < res2.length ? [firstCash].concat(res1) : res2;
        }
    }
    return result;
}

console.log('change1');
console.log(change(51, [30, 25, 10, 5, 1])); // [25, 25, 1]  最优解
console.log('change1', num1);
console.log(change(51, [30, 20, 2])); // 无解
console.log(change(51, [10, 5, 2])); // [25, 25, 1]  最优解


let num2 = 0
function change2(total, denos) {
    const cache = [];
    function _change(total, i) {
        if (total < 0) return false;
        if (total === 0) return [];
        if (denos.length < 1) return false;
        if (i === denos.length) return false;
        for (let index = 0; index < cache.length; index++) {
            const item = cache[index];
            if (item.index === index && item.result === total) {
                return item.result;
            }
        }
        num2 ++;
        let result;
        const firstCash = denos[i];
        const temp = total - firstCash;
        if (temp === 0) {
            result = [firstCash];
        } else if (temp < 0) {
            result = _change(total, i + 1);
        } else {
            const res1 = _change(temp, i);
            const res2 = _change(total, i + 1);
            if (!res1) {
                result = res2;
            } else if (!res2) {
                return [firstCash].concat(res1);
            } else {
                result = res1.length + 1 < res2.length ? [firstCash].concat(res1) : res2;
            }
        }
        cache.push({
            index: i,
            total,
            result
        });
        return result;
    }
    return _change(total, 0);
}

console.log('change2');
console.log(change2(51, [30, 25, 10, 5, 1])); // [25, 25, 1]  最优解
console.log('change2', num2);
console.log(change2(51, [30, 20, 2])); // 无解
console.log(change2(51, [10, 5, 2])); // [25, 25, 1]  最优解