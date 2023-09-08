/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + right >> 1;
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[0] <= nums[mid]) {
      //如果左边是有序的
      if (
        nums[0] <= target && // target在左边区间内的话
        target < nums[mid]
      ) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 如果右边是有序的
      if (
        nums[mid] < target && // target在右边区间内的话
        target <= nums[nums.length - 1]
      ) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
