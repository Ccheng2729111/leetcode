/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = -1;
  let right = arr.length;
  let resList = [];
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= x) {
      left = mid;
    } else {
      right = mid;
    }
  }

  let xIndex = left > 0 ? left : 0;
  let l = xIndex;
  let r = xIndex + 1;

  while (resList.length < k) {
    if (l < 0) {
      resList.push(arr[r]);
      r++;
      continue;
    }
    if (r > arr.length - 1) {
      resList.push(arr[l]);
      l--;
      continue;
    }
    if (Math.abs(arr[l] - x) < Math.abs(arr[r] - x)) {
      resList.push(arr[l]);
      l--;
    } else if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
      resList.push(arr[r]);
      r++;
    } else {
      resList.push(arr[l]);
      l--;
    }
  }

  resList.sort((a, b) => a - b);
  return resList;
};

findClosestElements([1, 2, 3, 4, 5], 4, -1);
// @lc code=end
