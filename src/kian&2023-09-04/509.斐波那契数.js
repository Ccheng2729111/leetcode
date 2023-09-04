/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n === 2 || n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// 带备忘录的动态规划 递推
var fib = function (n) {
  let memo = new Array(n + 1).fill(0);
  return dp(memo, n);
};

var dp = function (memo, n) {
  if (n < 2) return n;
  if (memo[n] !== 0) return memo[n];
  memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
  return memo[n];
};
// @lc code=end
