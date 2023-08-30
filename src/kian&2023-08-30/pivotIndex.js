/**
 * @param {number[]} nums
 * @return {number}
 */

// #1991
const nums = [2, 1, -1];
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let sumR = 0;
    let sumL = 0;

    let L = 0;

    while (true) {
      if (L === i) {
        break;
      }
      sumL = sumL + nums[L];
      L++;
    }

    let R = i + 1;
    while (true) {
      if (R === nums.length) {
        break;
      }
      sumR = sumR + nums[R];
      R++;
    }

    if (sumL === sumR) {
      return i;
    }
  }

  return -1;
};

console.log(pivotIndex(nums));
