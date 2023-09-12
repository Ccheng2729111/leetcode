/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let x = 0;
  let mount = 0;
  if(n===1) return 1
  for (let i = 1; i <= n; ++i) {
    if (n - mount < i) {
      return x;
    } else {
      mount += i;
      x++;
    }
  }
};

arrangeCoins(5);
// @lc code=end
