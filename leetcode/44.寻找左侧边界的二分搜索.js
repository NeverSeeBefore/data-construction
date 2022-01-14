// 寻找左侧边界的二分搜索
// 对于 nums = [1,2,2,2,3]， target = 2，算法会返回索引 1。
// 这个索引 1 的含义可以解读为「nums 中小于 2 的元素有 1 个」。

// 比如对于有序数组 nums = [2,3,5,7], target = 1，算法会返回 0，含义是：nums 中小于 1 的元素有 0 个。

// 再比如说 nums = [2,3,5,7], target = 8，算法会返回 4，含义是：nums 中小于 8 的元素有 4 个。

/**
 *
 * @param {number[]} arr
 * @param {number} target
 */
const leftBound = function (arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] === target) {
      right = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return left;
  // 换成这两行 即可返回target在数组中的第一次出现的索引
  if (left === arr.length) return -1;
  return arr[left] === target ? left : -1;
};

console.log(leftBound([1,2,2,2,3], 2));
console.log(leftBound([2,3,5,7], 1));
console.log(leftBound([2,3,5,7], 8));
