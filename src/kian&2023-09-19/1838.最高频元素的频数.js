/*
 * @lc app=leetcode.cn id=1838 lang=javascript
 *
 * [1838] 最高频元素的频数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let totalCount = 0;
  let acTotal = 0;
  let maxNum = 0;
  for (let r = 1; r < nums.length; ++r) {
    acTotal += nums[r - 1];
    totalCount = (r - l) * nums[r] - acTotal;
    while (totalCount > k) {
      totalCount -= nums[r] - nums[l];
      acTotal -= nums[l];
      l++;
    }
    maxNum = Math.max(maxNum, r - l);
  }
  return maxNum + 1;
};

maxFrequency([1, 2, 4], 5);
maxFrequency([1, 4, 8, 13], 5);
maxFrequency([3, 9, 6], 2);
// @lc code=end
