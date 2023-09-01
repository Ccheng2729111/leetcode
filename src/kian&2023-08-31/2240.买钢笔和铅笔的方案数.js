/*
 * @lc app=leetcode.cn id=2240 lang=javascript
 *
 * [2240] 买钢笔和铅笔的方案数
 */

// @lc code=start
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
  if (cost1 > total && cost2 > total) {
    return 1;
  }
  let count = 0;
  // 获取total可以买多少个cost1的数量
  let n = Math.floor(total / cost1);
  // 遍历这个数量，来获取剩余的钱买cost2的数量 注意从0开始并且右边区间是带着的
  for (let i = 0; i <= n; i++) {
    let left = total - i * cost1;
    if (left <= 0) {
      // 如果没有钱了，那cost1的花费这一次需要加上
      count++;
    } else {
      // 这里需要注意0这个也需要加上，所以余数需要加上额外的0这个数字
      count = count + Math.floor(left / cost2) + 1;
    }
  }
  return count
};
// @lc code=end

