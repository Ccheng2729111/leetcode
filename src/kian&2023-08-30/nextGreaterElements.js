/**
 * @param {number[]} nums
 * @return {number[]}
 */

// #503

const nums = [1, 2, 1];

// 一般环形数组长度增加一倍
// 索引按照index%nums.length来做
var nextGreaterElements = function (nums) {
  let result = Array.from(nums.length).fill(0);
  let strack = [];

  // nums长度加倍，下面的索引都按照取余数来，这样可以保证拿到循环两次的正确的索引
  for (let i = nums.length * 2 - 1; i >= 0; i--) {
    while (
      strack.length &&
      strack[strack.length - 1] <= nums[i % nums.length]
    ) {
      strack.pop();
    }

    result[i % nums.length] = strack.length ? strack[strack.length - 1] : -1;
    strack.push(nums[i % nums.length]);
  }
  return result;
};

var nextGreaterElements2 = function (nums) {
  let res = new Array(nums.length).fill(-1);
  let stack = [0];
  for (let i = 0; i < nums.length * 2; i++) {
    while (
      stack.length &&
      nums[i % nums.length] > nums[stack[stack.length - 1]]
    ) {
      let top = stack.pop();
      res[top] = nums[i % nums.length];
    }
    stack.push(i % nums.length);
  }
  return res;
};

nextGreaterElements2(nums);
