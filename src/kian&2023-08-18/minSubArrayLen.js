/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// #209
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
// 这个看到题目第一反应就是滑动窗口
// 一样的定义好左右边界
// 然后开始滑动，什么时候左边界开始收缩 其实就是达到了题目要求 vaild大雨等于target 此时R-L其实就是我们需要的
// 左边界滑动到不符合要求的时候 右边界开始滑动 只要右边界到最后一位
// 最后比较minlength和R-L即可 
var minSubArrayLen = function (target, nums) {
  let vaild = 0;
  let minLength = null;

  let L = 0;
  let R = 0;

  while (R < nums.length) {
    let rc = nums[R];
    R++;
    vaild += rc;

    while (vaild >= target) {
      minLength = minLength ? Math.min(minLength, R - L) : R - L;
      let lc = nums[L];
      L++;
      vaild = vaild - lc;
    }
  }
  return minLength;
};

minSubArrayLen(target, nums);
