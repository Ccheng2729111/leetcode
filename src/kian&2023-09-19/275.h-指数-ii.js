/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
/**
 *
 */
/**
 * 高引用次数其实就是大于等于m的数量是否是跟m相同
 * 问题是需要实现的是对数
 */
var hIndex = function (citations) {
  let n = citations.length;
  let left = -1;
  let right = n;
  while (left + 1 < right) {
    let m = Math.floor((left + right) / 2);
    if (citations[m] >= n - m) {
      right = m;
    } else {
      left = m;
    }
  }

  return n - right;
};

hIndex([0, 1, 3, 5, 6]);
hIndex([1, 2, 100]);
hIndex([100]);
hIndex([0]);
// @lc code=end
