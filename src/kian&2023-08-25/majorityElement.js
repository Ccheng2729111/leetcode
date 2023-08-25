/**
 * @param {number[]} nums
 * @return {number}
 */

// #169
const nums = [6,5,5]
var majorityElement = function (nums) {
  let map = new Map();
  let i = 0;
  let max = 0
  while (i < nums.length) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if(map.get(nums[i]) >= nums.length/2){
      max = nums[i]
      break;
    }
    i++;
  }

  return max

};

var majorityElement2 = function(nums) {
  let num = 0;
  let count = 0;
  for(let i of nums) {
    if(count === 0) {
      num = i;
      count = 1;
      continue;
    }
    num === i ? count++ : count--;
  }
  return num;
};

majorityElement2(nums);
