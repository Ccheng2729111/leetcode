/**
 * 利用双指针首尾遍历减少时间复杂度
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums == null || !nums.length || nums.length < 3) {
    return [];
  }
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        while (nums[left] === nums[left + 1]) {
          // 去重
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          // 去重
          right--;
        }
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
threeSum([-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]);
