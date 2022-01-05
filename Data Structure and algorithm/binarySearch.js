

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
}


console.log(
    binarySearch([], 1)
);

console.log(
    binarySearch([1], 1)
)

console.log(
    binarySearch([1,2], 1)
)
console.log(
    binarySearch([1,2,3], 1)
)
console.log(
    binarySearch([1,2,3], 2)
)
console.log(
    binarySearch([1,2,3], 3)
)
console.log(
    binarySearch([1,2,3,4], 3)
)
console.log(
    binarySearch([1,2,3,4], 2)
)