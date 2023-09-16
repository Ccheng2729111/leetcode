/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let dp = [];
  // 边界值 需要考虑两个，所以这里设置两个边界值
  // 第一个是数组第一个
  // 第二个是数组中前两个的最大值
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // 递推公式
  for (let i = 2; i < nums.length; ++i) {
    // 要么选择最后一个 那么能偷的金额就是dp[i-2] + nums[i]因为i-1个是不能偷的
    // 要么不选择最后一个 那么能偷的就是dp[i-1]
    // 这里选择最大值就可以
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[dp.length - 1];
};

rob([2, 7, 9, 3, 1]);
// @lc code=end
