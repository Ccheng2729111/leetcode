/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 0;
  let right = Math.max(...piles);

  while (left + 1 < right) {
    // 假设用mid的数组去吃香蕉
    let mid = Math.floor((left + right) / 2);
    let allTime = 0;
    for (let i = 0; i < piles.length; ++i) {
      if (piles[i] <= mid) {
        allTime++;
      } else {
        allTime += Math.ceil(piles[i] / mid);
      }
    }

    if (allTime <= h) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right
};

minEatingSpeed([312884470], 968709470);
// @lc code=end
