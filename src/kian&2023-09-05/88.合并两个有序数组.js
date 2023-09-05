/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;

  let result = new Array(m + n).fill(0);

  while (i < m || j < n) {
    let cur;
    if (i === m) {
      cur = nums2[j++];
    } else if (j === n) {
      cur = nums1[i++];
    } else if (nums1[i] < nums2[j]) {
      cur = nums1[i++];
    } else {
      cur = nums2[j++];
    }

    result[i + j - 1] = cur;
  }

  for (let i = 0; i !== m + n; i++) {
    nums1[i] = result[i];
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// @lc code=end
