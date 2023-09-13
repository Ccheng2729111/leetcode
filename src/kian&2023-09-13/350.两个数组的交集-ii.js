/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; ++i) {
    if (nums2.indexOf(nums1[i]) !== -1) {
      res.push(nums1[i]);
      nums2.splice(nums2.indexOf(nums1[i]), 1);
    }
  }

  return res;
};
// @lc code=end
