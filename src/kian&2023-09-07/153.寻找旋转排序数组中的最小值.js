/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 首先知道它至少是有一段是连续的，甚至是两段是连续的 无论旋转了多少次
// 那么这里我们用红蓝法，采用左右闭合的方法
// left = -1 右边的话 先考虑右边因为它肯定是蓝色或者就是最小值本身
// 所以右边区间是从n-2开始 但是我们是闭右区间，所以是n-2+1开始
// 然后我们只需要跟蓝色对比大小，如果比蓝色小那么说明center到蓝色的都是蓝色 这时候移动右边到mid 然后继续对比
var findMin = function (nums) {
  let l = -1;
  // r设置成闭区间
  let r = nums.length - 2 + 1;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < nums[nums.length - 1]) {
      r = mid;
    } else {
      l = mid;
    }
  }

  return nums[r];
};
// @lc code=end
