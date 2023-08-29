/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 3, 3];
const target = 3;
var searchRange = function (nums, target) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let res = [];

  while (left <= right) {
    // 获取中位点
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  if (left < 0 || left > n) {
    left = -1;
  }

  res.push(nums[left] === target ? left : -1);

  left = 0;
  right = n - 1;
  while (left <= right) {
    // 获取中位点
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  if (right < 0 || right > n) {
    right = -1;
  }
  res.push(nums[right] === target ? right : -1);

  return res
};

searchRange(nums, target);
