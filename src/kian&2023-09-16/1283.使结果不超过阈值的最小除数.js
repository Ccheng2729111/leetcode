/*
 * @lc app=leetcode.cn id=1283 lang=javascript
 *
 * [1283] 使结果不超过阈值的最小除数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let left = 0;
  let right = Math.max(...nums) + 1;
  while (left + 1 < right) {
    // 我们假设最小的正整数是m
    let m = Math.floor((right + left) / 2);
    let sumCount = 0;
    for (let i = 0; i < nums.length; ++i) {
      let count = Math.ceil(nums[i] / m);
      sumCount += count;
    }

    // 如果算出来的整和大了 那就让m变大，让整个sumCount变小，符合题意
    if (sumCount > threshold) {
      left = m;
    } else {
      // 如果算出来的和符合题意了，那就让m更小，让target更大直到大于目标
      // 这样m就是最小的
      right = m;
    }
  }

  return right;
};
smallestDivisor([44, 22, 33, 11, 1], 5);
// @lc code=end
