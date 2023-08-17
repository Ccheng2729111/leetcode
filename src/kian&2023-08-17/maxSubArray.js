/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let max = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b)[
    nums.length - 1
  ];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      let sum = 0;
      nums.slice(i, j).forEach((k) => {
        sum += k;
      });
      max = Math.max(sum, max);
    }
  }

  return max;
};

// #53
// 这里是动态规划的问题
// 首先需要明确的是sum如果是大于0的话 右边的数字就是对自己有益的 保留并且加上下一个数字
// 如果sum不是小于等于0的话 表示之前的数字都是无意义的，直接赋值给下一个数字
// 然后计算最大值即可
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArray2 = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (let num of nums) {
    if (sum > 0) {
      sum = sum + num;
    } else {
      sum = num;
    }

    ans = Math.max(ans, sum);
  }
  return ans
};

maxSubArray2(nums);
