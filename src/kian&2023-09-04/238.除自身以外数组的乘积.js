/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      left = left * nums[i - 1];
    }
    res[i] = left;
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i < nums.length - 1) {
      right = right * nums[i + 1];
    }
    res[i] *= right;
  }

  return res;
};

// productExceptSelf([1,2,3,4])
// @lc code=end
