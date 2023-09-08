/*
 * @lc app=leetcode.cn id=1855 lang=javascript
 *
 * [1855] 下标对中的最大距离
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let maxDistan = 0;
  for (let j = 0; j < nums2.length; ++j) {
    let left = -1;
    let right = j + 1;
    while (left + 1 < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums1[mid] <= nums2[j]) {
        right = mid;
      } else {
        left = mid;
      }
    }
    let distance = j - right;
    maxDistan = Math.max(distance, maxDistan);
  }

  return maxDistan;
};

// maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]);
// @lc code=end
