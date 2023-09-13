/*
 * @lc app=leetcode.cn id=1346 lang=javascript
 *
 * [1346] 检查整数及其两倍数是否存在
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; ++i) {
    let left = -1;
    let right = arr.length;
    while (left + 1 < right) {
      let mid = Math.floor((right + left) / 2);
      let target = arr[i] * 2;

      if (arr[mid] === target && mid !== i) {
        return true;
      }

      if (arr[mid] < target) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }
  return false
};

// checkIfExist([10, 2, 5, 3]);
// checkIfExist([7,1,14,11]);
// checkIfExist([3,1,7,11]);
// @lc code=end
