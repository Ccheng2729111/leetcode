/*
 * @lc app=leetcode.cn id=2605 lang=javascript
 *
 * [2605] 从两个数字数组里生成最小数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  let memoMap = new Map();

  let minCount = null;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (memoMap.has(nums1[i])) continue;
        memoMap.set(nums1[i], 1);
        minCount = minCount ? Math.min(nums1[i], minCount) : nums1[i];
        continue;
      } else {
        let combineNum1 = `${nums1[i]}${nums2[j]}`;
        let combineNum2 = `${nums2[j]}${nums1[i]}`;

        let minCombine = Math.min(Number(combineNum1), Number(combineNum2));
        if (memoMap.has(minCombine)) continue;
        memoMap.set(minCombine, 1);

        minCount = minCount ? Math.min(minCombine, minCount) : minCombine;
      }
    }
  }

  return minCount;
};

// minNumber([4, 1, 3], [5, 7]);
// minNumber([3, 5, 2, 6], [3, 1, 7]);
// @lc code=end
