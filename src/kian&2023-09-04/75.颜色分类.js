/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         let mix = nums[j];
//         nums[j] = nums[i];
//         nums[i] = mix;
//       }
//     }
//   }

//   return nums;
// };

// 波兰国旗问题 遇到0放在左指针位置 左指针++ 遇到2放到右指针位置 右指针-- 遇到1跳过
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      swap(nums, i, left);
      left++;
    } else if (nums[i] === 2) {
      swap(nums, i, right);
      right--;
      i--;
    }
  }

  function swap(arr, i, j) {
    let mix = arr[j];
    arr[j] = arr[i];
    arr[i] = mix;
  }
};

sortColors([2, 0, 1]);
// @lc code=end
