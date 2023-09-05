/*
 * @lc app=leetcode.cn id=1921 lang=javascript
 *
 * [1921] 消灭怪物的最大数量
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  const n = dist.length;
  const arrivalTimes = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    arrivalTimes[i] = Math.ceil(dist[i] / speed[i]);
  }
  arrivalTimes.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (arrivalTimes[i] <= i) {
      return i;
    }
  }
  return n;
};

eliminateMaximum([4, 2, 8], [2, 1, 4]);
// @lc code=end
