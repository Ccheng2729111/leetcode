/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let n = nums.length;
  for (let i = n - 2; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      let left = i;
      let right = n
      let target = nums[i];
      while (left + 1 < right) {
        let m = Math.floor((left + right) / 2);
        if (nums[m] > target) {
          left = m;
        } else {
          right = m;
        }
      }
      let prevIndex = left;
      let trr = nums[prevIndex];
      nums[prevIndex] = nums[i];
      nums[i] = trr;

      let newList = nums.splice(i + 1);
      newList.sort((a, b) => a - b);
      nums.push(...newList)
      return;
    }
  }
  nums.sort((a, b) => a - b);
};
nextPermutation([1,2,0,3,0,1,2,4]);
// nextPermutation([1, 3, 2]);
// @lc code=end
