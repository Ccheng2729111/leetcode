/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const nums = [1,3,-1,-3,5,3,6,7]
const k = 3;
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let L = 0;
  let R = 0;
  let strack = [];
  if (k === 1) {
    return nums;
  }
  while (R < nums.length) {
    let rc = nums[R];
    // 这里需要注意 如果是单调队列相等的情况不pop，因为后面需要判断左边界是否相等，如果拿出来的正好是最大值，那么需要shift
    // 这里需要考虑区间内有多个最大值，所以不能相等的时候直接pop
    while (strack.length && strack[strack.length - 1] < rc) {
      strack.pop();
    }
    strack.push(nums[R]);
    R++;

    if (R - L === k) {
      let lc = nums[L];
      res.push(lc === strack[0] ? strack.shift() : strack[0]);
      L++;
    }
  }

  return res;
};

maxSlidingWindow(nums, k);
