/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let list = [];
  let hasChar = false;
  for (let char of String(x)) {
    if (char === '-') {
      hasChar = true;
    } else {
      list.push(char);
    }
  }

  let res = '';

  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] === '0' && res.length === 0) {
      continue;
    }
    res += list[i];
  }

  res = hasChar ? -Number(res) : Number(res);

  if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
    return 0;
  }

  return res;
};

// reverse(901000)

// @lc code=end
