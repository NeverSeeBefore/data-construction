// 已知背包对容量，和一些物品，每个物品两个属性：重量和价值，且每个物品只有一个
// 怎么装能得到最大的价值

function package(total, objects) {
    const cache = []
    // 容量为 total 的背包，对于 前0-i件物品 能装的最大值;
    function _package(total, i) {
        if (i < 0) return false;
        if (total <= 0) return false;
        const cacheRes = getCache(total, i);
        if (cacheRes) return cacheRes;
        let result;
        // 如果第i件物品装进去，剩余的空间
        const restSpace = total - objects[i].weight;
        // 剩余空间 < 0 说明 装不下
        if (restSpace < 0) {
            // 说明 0->i件物品 与 0->i-1件物品 背包装的价值是一样的
            result = _package(total, i - 1);
        } else {
            // 剩余空间 >= 0 说明能装下
            // 此时 有两种可能
            // 如果装
            const tempRes1 = _package(restSpace, i - 1);
            let res1 = [objects[i]];
            let res1Value = objects[i].value;

            if (tempRes1) {
                res1 = res1.concat(tempRes1);
                res1Value = res1.reduce((prevValue, curItem) => prevValue + curItem.value, 0);
            }
            // 如果不装
            let res2 = _package(total, i - 1);
            let res2Value = 0;
            if (res2) {
                res2Value = res2.reduce((prevValue, curItem) => prevValue + curItem.value, 0);
            }
            result = res1Value > res2Value ? res1 : res2;
        }
        cache.push({
            total,
            index: i,
            result,
        });
        return result;
    }
    function getCache(total, i) {
        for (let index = 0; index < objects.length; index++) {
            const ele = objects[index];
            if (ele.total === total && ele.index === i) {
                return ele.result;
            }
        }
        return false;
    }
    const result = _package(total, objects.length - 1);
    console.log('cache', cache);
    return result;
}
console.log(
    package(4, [
        { weight: 4, value: 3000 },
        { weight: 3, value: 2000 },
        { weight: 1, value: 1500 },
        { weight: 1, value: 2000 }
    ])
)