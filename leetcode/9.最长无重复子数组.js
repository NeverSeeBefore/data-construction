
// const arr = [2,2,3,4,8,99,3];
const arr = [2, 3, 4, 5, 2, 4, 9, 6];

function maxLength(arr) {
    // write code here
    var len = arr.length
    if (len <= 1) {
        return len;
    }
    var curArr = [arr[0]];
    var max = 1;
    for (var i = 1; i < len; i++) {

        const index = curArr.indexOf(arr[i]);
        if (index === -1) {
            curArr.push(arr[i]);
        }
        else {
            curArr.splice(0, index + 1);
            curArr.push(arr[i]);
        }
        max = curArr.length > max ? curArr.length : max;
        console.log(curArr);
    }
    return max;
}

console.log(
    maxLength(arr)
);