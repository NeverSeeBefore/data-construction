var arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 快速排序

// 标准版快速排序
function quickSort(arr, begin, end) {
    if (begin >= end) return;
    var i = begin;
    var j = end;
    var x = arr[begin];
    while (i < j) {
        while (i < j && arr[j] >= x) j--;
        if (i < j) {
            arr[i] = arr[j];
            i++;
        }
        while (i < j && arr[i] < x) i++;
        if (i < j) {
            arr[j] = arr[i];
            j--;
        }
    }
    arr[i] = x;
    quickSort(arr, begin, i - 1);
    quickSort(arr, i + 1, end);
}

quickSort(arr, 0, arr.length - 1)
console.log(arr);
