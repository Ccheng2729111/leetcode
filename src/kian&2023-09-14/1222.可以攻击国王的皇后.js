/*
 * @lc app=leetcode.cn id=1222 lang=javascript
 *
 * [1222] 可以攻击国王的皇后
 */

// @lc code=start
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
/**
 * 第一反应是找到当前k坐在的行列 然后找最近的q对应的坐标
 */
var queensAttacktheKing = function (queens, king) {
  let res = [];
  let resAllow = [];
  // 行
  let nirRow = king[0];
  // 列
  let nirCol = king[1];
  // 找到最近的一行并且列也是最小的q
  let sortByRow = queens.sort((a, b) => a[0] - b[0]);
  // 找出最近的一列
  for (let i = 0; i < sortByRow.length; ++i) {
    if (sortByRow[i][1] === nirCol) {
      res.push(sortByRow[i]);
      break;
    }
  }
  let sortByCol = queens.sort((a, b) => a[1] - b[1]);
  // 找出最近的一行
  for (let i = 0; i < sortByCol.length; ++i) {
    if (sortByCol[i][0] === nirRow) {
      res.push(sortByRow[i]);
      break;
    }
  }

  let minDistance = new Map();
  for (let i = 0; i < queens.length; ++i) {
    if (Math.abs(queens[i][0] - king[0]) === Math.abs(queens[i][1] - king[1])) {
      minDistance.set(queens[i], Math.abs(queens[i][0] - king[0]));
    }
  }

  console.log(res);
  console.log(minDistance);
};

queensAttacktheKing(
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 4],
    [3, 5],
    [4, 4],
    [4, 5]
  ],
  [3, 3]
);
// @lc code=end
