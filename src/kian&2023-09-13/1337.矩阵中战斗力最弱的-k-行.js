/*
 * @lc app=leetcode.cn id=1337 lang=javascript
 *
 * [1337] 矩阵中战斗力最弱的 K 行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
/**
 * 首先想到的是for循环这个矩阵，然后找到第一个小于1的下标 然后1的长度就是本身的单个元素长度-下标
 * 这样就能得到排序
 */
var kWeakestRows = function (mat, k) {
  let resList = [];
  for (let i = 0; i < mat.length; ++i) {
    let left = -1;
    let right = mat[i].length;
    let target = 1;
    while (left + 1 < right) {
      let mid = Math.floor((right + left) / 2);
      if (mat[i][mid] < target) {
        right = mid;
      } else {
        left = mid;
      }
    }

    let armLength = right;
    resList.push([i, armLength]);
  }

  resList.sort((a, b) => a[1] - b[1]);
  let res = resList.slice(0,k).map(v=>v[0])
  return res
};

// kWeakestRows([
//   [1, 1, 0, 0, 0],
//   [1, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [1, 1, 1, 1, 1]
// ],3);

// @lc code=end
