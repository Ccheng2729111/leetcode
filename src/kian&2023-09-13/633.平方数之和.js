/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */

/**
 * 首先想到的是不是可以用嵌套循环加上二分来做。
 */
var judgeSquareSum = function (c) {
  for (let i = 0; i * i <= c; ++i) {
    if (Number.isInteger(Math.sqrt(c - i * i))) {
      return true;
    }
  }
  return false;
};
judgeSquareSum(9);
// judgeSquareSum(3);
// judgeSquareSum(2);
// @lc code=end
