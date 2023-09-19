/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  // if (m === 1) {
  //   let left = -1;
  //   let right = n;
  //   while (left + 1 < right) {
  //     let mid = Math.floor((left + right) / 2);
  //     let value = matrix[0][mid];
  //     if (value === target) return true;
  //     if (value < target) {
  //       left = mid;
  //     } else {
  //       right = mid;
  //     }
  //   }
  //   return false;
  // }

  for (let i = 0; i < m; ++i) {
    let up = -1;
    let down = n + 1;
    while (up + 1 < down) {
      let mid = Math.floor((up + down) / 2);
      let value = matrix[i][mid];
      if (value === target) return true;
      if (value < target) {
        up = mid;
      } else {
        down = mid;
      }
    }
  }

  return false;
};
searchMatrix([[1,4],[2,5]], 4);
// @lc code=end
