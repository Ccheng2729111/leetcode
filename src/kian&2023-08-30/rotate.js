/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// #189
const nums = [1,2,3,4,5,6,7];
const k = 3;
var rotate = function (nums, k) {
  let n = nums.length;
  let result = Array.from(n).fill(0)
  for (let i = 0; i < n; i++) {
    result[(i + k) % n] = nums[i]
  }
  console.log(result)
};
rotate(nums, k);
