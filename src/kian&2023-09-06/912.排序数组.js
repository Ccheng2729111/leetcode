/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  for (let i = 0; i < nums.length / 2; ++i) {
    let minIndex = i;
    let maxIndex = i;
    for (let j = i + 1; j < nums.length - i; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
      if (nums[maxIndex] < nums[j]) {
        maxIndex = j;
      }
    }

    if (minIndex === maxIndex) {
      console.log(minIndex)
      console.log(maxIndex)
      break
    };

    let temp = nums[minIndex];
    nums[minIndex] = nums[i];
    nums[i] = temp;

    if (maxIndex === i) {
      maxIndex = minIndex;
    }

    let lastIndex = nums.length - i - 1;
    temp = nums[lastIndex];
    nums[lastIndex] = nums[maxIndex];
    nums[maxIndex] = temp;
  }

  return nums;
};

sortArray([1,2,3,4,5,6])
// @lc code=end
