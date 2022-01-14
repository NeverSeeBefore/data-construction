/**
 *
 * @param {number[]} arr
 * @param {number} target
 */
const binarySearch = function (arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
};

// -1
console.log(binarySearch([], 5));
// -1
console.log(binarySearch([4], 5));
// 0
console.log(binarySearch([5], 5));
// -1
console.log(binarySearch([6], 5));
// -1
console.log(binarySearch([3, 4], 5));
// 1
console.log(binarySearch([4, 5], 5));
// 0
console.log(binarySearch([5, 6], 5));
// -1
console.log(binarySearch([6, 7], 5));
// -1
console.log(binarySearch([4, 6], 5));
// -1
console.log(binarySearch([2, 3, 4], 5));
// 2
console.log(binarySearch([3, 4, 5], 5));
// 1
console.log(binarySearch([4, 5, 6], 5));
// 0
console.log(binarySearch([5, 6, 7], 5));
// -1
console.log(binarySearch([6, 7, 8], 5));
// -1
console.log(binarySearch([3, 4, 6], 5));
// -1
console.log(binarySearch([4, 6, 7], 5));
// -1
console.log(binarySearch([1, 2, 3, 4], 5));
// 3
console.log(binarySearch([2, 3, 4, 5], 5));
// 2
console.log(binarySearch([3, 4, 5, 6], 5));
// 1
console.log(binarySearch([4, 5, 6, 7], 5));
// 0
console.log(binarySearch([5, 6, 7, 8], 5));
// -1
console.log(binarySearch([6, 7, 8, 9], 5));
// -1
console.log(binarySearch([2, 3, 4, 6], 5));
// -1
console.log(binarySearch([3, 4, 6, 7], 5));
// -1
console.log(binarySearch([4, 6, 7, 8], 5));
// 4
console.log(binarySearch([1, 2, 3, 4, 5], 5));
// 3
console.log(binarySearch([2, 3, 4, 5, 6], 5));
// 2
console.log(binarySearch([3, 4, 5, 6, 7], 5));
// 1
console.log(binarySearch([4, 5, 6, 7, 8], 5));
// 0
console.log(binarySearch([5, 6, 7, 8, 9], 5));
// -1
console.log(binarySearch([6, 7, 8, 9, 10], 5));
// -1
console.log(binarySearch([1, 2, 3, 4, 6], 5));
// -1
console.log(binarySearch([2, 3, 4, 6, 7], 5));
// -1
console.log(binarySearch([3, 4, 6, 7, 8], 5));
// -1
console.log(binarySearch([4, 6, 7, 8, 9], 5));
