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
  for (let j = 0; j < nums1.length; ++j) {
    let left = -1;
    let right =nums2.length;
    while (left + 1 < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums2[mid] >= nums1[j]) {
        left = mid;
      } else {
        right = mid;
      }
    }
    let distance = left - j;
    maxDistan = Math.max(distance, maxDistan);
  }

  return maxDistan;
};

// maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]);
// @lc code=end
