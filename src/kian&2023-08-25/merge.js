/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;
var merge = function (nums1, m, nums2, n) {
  nums1 = nums1.slice(0, m).concat(nums2);
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] > nums1[j]) {
        let num = nums1[j];
        nums1[j] = nums1[i];
        nums1[i] = num;
      }
    }
  }
  console.log(nums1)
};

var removeElement = function(nums, val) {
  for(let i=0;i<nums.length;i++){
    if(nums[i]===val){
      nums.splice(i,1)
      i--
    }
  }
  return nums.length
};

removeElement([3,2,2,3],3)
// merge(nums1, m, nums2, n);
