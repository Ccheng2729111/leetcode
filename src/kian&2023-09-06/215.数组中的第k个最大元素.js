/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let roundCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[maxIndex] <= nums[j]) {
        maxIndex = j;
      }
    }

    let temp = nums[maxIndex];
    nums[maxIndex] = nums[i];
    nums[i] = temp;
    roundCount++;

    if (roundCount === k) {
      return nums[i];
    }
  }
};

// findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
// findKthLargest([3,2,1,5,6,4], 2);
// @lc code=end
