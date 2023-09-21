/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 先排序 然后遍历饼干数组，对g进行二分搜索小于等于的 这里二分的边界有点麻烦
// 所以直接暴力双层遍历也可以 但是也要现sort 那么是on二次分+2o
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < s.length; ++i) {
    let j = 0;
    while (j < g.length) {
      let matchCount = g[j];
      if (s[i] >= matchCount) {
        count++;
        g.shift();
        break;
      }
      j++;
    }
  }

  return count;
};

// findContentChildren([1, 2, 3], [1, 1]);
findContentChildren([1,2], [1,2,3]);
// @lc code=end
