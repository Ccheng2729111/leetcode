/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = -1;
  let right = nums.length;
  let ans = [-1, -1];

  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0];
    }
  }

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  ans[0] = left + 1;

  left = -1;
  right = nums.length;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  ans[1] = left;

  if (
    nums[ans[0]] === target &&
    nums[ans[1]] === target &&
    ans[0] <= ans[1] &&
    ans[0] >= 0 &&
    ans[1] <= nums.length - 1
  ) {
    return ans;
  } else {
    return [-1, -1];
  }
};

searchRange([2,2], 2);
// @lc code=end
