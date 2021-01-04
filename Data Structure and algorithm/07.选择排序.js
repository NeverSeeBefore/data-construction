var arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 选择排序 和 冒泡排序的区别
// 冒泡排序，每次前边的比后边的大，都要交换
// 选择排序，记录最大的一项的索引，一次循环之后再交换


// 比较
function compare(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
// 交换
function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
// 选择排序
// 每次选出一个最大的放到后端
// 第一次选出一个最大的放到最后一项
// 第二次选出一个第二大的的放到倒数第二项
// 循环
function sort(arr) {
    var length = arr.length;
    for (var i = 0; i < length - 1; i++) {
        var maxIndex = 0;
        for (var j = 0; j < length - i - 1; j++) {
            if (compare(maxIndex, arr[j])) {
                maxIndex = j;
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i);
    }
    return arr;
}
console.log(
    '选择排序',
    sort(JSON.parse(JSON.stringify(arr)))
);