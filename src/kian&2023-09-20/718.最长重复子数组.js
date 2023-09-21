/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (A, B) {
  let n1 = A.length;
  let n2 = B.length;
  let max = 0;
  for (let i = 0; i < n1; i++) {
    let len = Math.min(n1 - i, n2);

    let k = 0;
    for (let j = 0; j < len; ++j) {
      if (A[i + j] === B[j]) {
        k++;
      } else {
        k = 0;
      }

      max = Math.max(max, k);
    }
  }

  for (let i = 0; i < n2; i++) {
    let len = Math.min(n2 - i, n1);

    let k = 0;
    for (let j = 0; j < len; ++j) {
      if (B[i + j] === A[j]) {
        k++;
      } else {
        k = 0;
      }

      max = Math.max(max, k);
    }
  }

  return max;
};

// findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);
findLength([1, 1, 0, 0, 1], [1, 1, 0, 0, 0]);
// @lc code=end
