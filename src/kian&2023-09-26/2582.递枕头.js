/*
 * @lc app=leetcode.cn id=2582 lang=javascript
 *
 * [2582] 递枕头
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let left = 1;

  let flag = false;

  while (time > 0) {
    if (left === n) {
      left--;
      time--;
      flag = true;
      continue;
    }

    if (left === 1) {
      left++;
      time--;
      flag = false;
      continue;
    }
    if (!flag) {
      left++;
      time--;
    } else {
      left--;
      time--;
    }
  }

  return left;
};

passThePillow(18, 36);
// passThePillow(3, 2);
// @lc code=end
