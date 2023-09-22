/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let changeFlagIndex = null;
  let count = 0;

  if (flowerbed.length === 1) {
    if (flowerbed[0] === 0) count++;
    return count >= n;
  }

  for (let i = 0; i < flowerbed.length; ++i) {
    if (
      (flowerbed[i - 1] === 0 &&
        flowerbed[i + 1] === 0 &&
        flowerbed[i] === 0) ||
      (flowerbed[i + 1] === 0 && i === 0 && flowerbed[i] === 0) ||
      (flowerbed[i - 1] === 0 &&
        i === flowerbed.length - 1 &&
        flowerbed[i] === 0)
    ) {
      if (changeFlagIndex!==null && changeFlagIndex === i - 1) {
        continue;
      }
      count++;
      changeFlagIndex = i;
    }
  }

  return count >= n;
};

canPlaceFlowers([0, 0], 2);
// canPlaceFlowers([1, 0, 0, 0, 1], 2);
// @lc code=end
