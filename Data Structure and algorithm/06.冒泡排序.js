var arr = [4, 1, 6, 9, 3, 2, 8, 7];

var count = 0;
// 冒泡排序
function bubbleSort(arr) {
    const length = arr.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            count++;
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log('原数组', arr);
console.log(
    '排序',
    bubbleSort(JSON.parse(JSON.stringify(arr)))
);
console.log(count);

// 排序不是比较大小，而是比较和交换

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
// 循环
function sort(arr) {
    var length = arr.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
        }
    }
    return arr;
}
console.log(
    '另一种排序',
    sort(JSON.parse(JSON.stringify(arr)))
);