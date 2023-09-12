/*
 * @lc app=leetcode.cn id=1351 lang=javascript
 *
 * [1351] 统计有序矩阵中的负数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 这里首先知道的都是递减排序的数组，然后知道行和列都是递减，那么这里在遍历
 * 传入的grid的时候 可以利用这个特性，如果在遍历到某一行的时候 有小于0的
 * 直接把右边界设置成这个下标，因为后面的同样的下标和后的数据都会小于0
 * 其他的就正常二分就行了
 *
 */
var countNegatives = function (grid) {
  let n = grid.length;
  let matchCount = 0;
  let left = -1;
  let right = grid[0].length;
  for (let i = 0; i < n; ++i) {
    let nums = grid[i];
    let numsLen = right;
    while (left + 1 < right) {
      let mid = Math.floor((right + left) / 2);
      if (nums[mid] >= 0) {
        left = mid;
      } else {
        right = mid;
      }
    }

    matchCount += numsLen - (left + 1);

    if (left + 1 <= numsLen - 1) {
      let leftCount = n - i - 1;
      matchCount += leftCount * (numsLen - (left + 1));
      right = left + 1;
      left = -1;
    } else {
      left = -1;
      right = numsLen;
    }
  }
  return matchCount
};
countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]);
// @lc code=end
