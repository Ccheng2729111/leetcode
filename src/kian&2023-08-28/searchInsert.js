/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const nums = [1, 3, 5, 7];
const target = 9;
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[i] > target) {
      return 0;
    }
    if (nums[i] === target) {
      return i;
    }
    if (i > 0 && nums[i - 1] < target && nums[i] > target) {
      return i;
    }

    if (i === nums.length - 1 && nums[i] < target) {
      return nums.length;
    }
  }
};

var searchInsert1 = function (nums, target) {
  let L = 0;
  let R = nums.length - 1;

  let res = nums.length;

  while (L <= R) {
    let mid = L + Math.floor((R - L) / 2);
    if (nums[mid] === target) {
      res = mid;
      break;
    } else if (nums[mid] > target) {
      res = mid;
      R = mid - 1;
    } else if (nums[mid] < target) {
      L = mid + 1;
    }
  }

  return res;
};

console.log(searchInsert1(nums, target));
