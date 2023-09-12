/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
/**
 * 没啥好说的 直接找target就行
 */
var isPerfectSquare = function (num) {
  let left = -1;
  let right = num + 1;

  while (left + 1 < right) {
    let mid = Math.floor((right + left) / 2);
    let target = mid * mid;
    if (target <= num) {
      left = mid;
      if (target === num) {
        return true;
      }
    } else {
      right = mid;
    }
  }
  return false;
};
// isPerfectSquare(16);
// @lc code=end
