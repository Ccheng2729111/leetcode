/*
 * @lc app=leetcode.cn id=2511 lang=javascript
 *
 * [2511] 最多可以摧毁的敌人城堡数目
 */

// @lc code=start
/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  let max = 0;
  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === 1 && i > 0) {
      let maxCount = findMaxLen(i - 1, i + 1);
      max = Math.max(max, maxCount);
      continue;
    }

    if (forts[i] === 1 && i === 0) {
      let maxCount = findMaxLen(0, i + 1);
      max = Math.max(max, maxCount);
      continue;
    }
  }

  function findMaxLen(left, right) {
    let leftCount = 0;
    let rightCount = 0;
    while (
      forts[left] !== null &&
      forts[left] !== undefined &&
      forts[left] === 0
    ) {
      leftCount++;
      left--;
    }

    if (forts[left] != -1) {
      leftCount = 0;
    }

    while (
      forts[right] !== null &&
      forts[right] !== undefined &&
      forts[right] === 0
    ) {
      rightCount++;
      right++;
    }

    if (forts[right] != -1) {
      rightCount = 0;
    }

    if (leftCount > rightCount) {
      return leftCount;
    } else {
      return rightCount;
    }
  }

  return max;
};

// captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1]);
// captureForts([0, 0, 1, -1]);
// @lc code=end
