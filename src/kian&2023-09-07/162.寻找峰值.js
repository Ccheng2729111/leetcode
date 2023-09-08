/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  //(left,right)
  // left = 0 right = n-2
  let left = -1;
  let right = nums.length - 2 + 1;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    //这个是符合的情况 左边界收缩
    if (nums[mid] < nums[mid + 1]) {
      left = mid;
    } else {
      // 符合右边小于左边 右边界收缩
      right = mid;
    }
  }
  return right;
};
// @lc code=end
