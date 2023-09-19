/*
 * @lc app=leetcode.cn id=1818 lang=javascript
 *
 * [1818] 绝对差值和
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  let mod = 1000000007;
  let recs = [...nums1];
  recs.sort((a, b) => a - b);

  let sum = 0;
  let maxCount = 0;
  for (let i = 0; i < nums1.length; ++i) {
    let diff = Math.abs(nums1[i] - nums2[i]);
    sum  = (sum + diff) % mod;

    let left = -1;
    let right = nums1.length;
    while (left + 1 < right) {
      let m = Math.floor((left + right) / 2);

      if (recs[m] <= nums2[i]) {
        left = m;
      } else {
        right = m;
      }
    }
    // 差值肯定是越小越好，这样最后的结果才会更小
    if (left >= 0) {
      maxCount = Math.max(maxCount, diff - (nums2[i] - recs[left]));
    }

    if (right < nums1.length) {
      maxCount = Math.max(maxCount, diff - (recs[right] - nums2[i]));
    }
  }

  // 把多加的减掉
  return (sum - maxCount + mod) % mod;
};

minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]);
// @lc code=end
