/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const nums = [1, 3, 5, 6];
const k = 5;
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return left;
};

searchInsert(nums, k);
