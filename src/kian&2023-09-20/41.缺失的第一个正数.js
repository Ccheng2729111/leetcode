/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 第一反应是可以尝试一下二分
 * 结果不行，没有单调性，
 */
var firstMissingPositive = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; ++i) {
    map.set(nums[i], 1);
  }

  let count = 1;
  while (true) {
    if (map.has(count)){
      count++
      continue
    };
    return count
  }
};
firstMissingPositive([3,4,-1,1])
// @lc code=end
